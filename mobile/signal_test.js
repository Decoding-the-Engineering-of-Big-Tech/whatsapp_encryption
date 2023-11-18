const nacl = require('tweetnacl');
const naclUtil = require('tweetnacl-util');
const crypto = require('crypto');

// Generate Initiator's and Recipient's key pairs
const initiatorKeyPair = nacl.box.keyPair();
const recipientKeyPair = nacl.box.keyPair();

// Simulate Recipient's signed prekey and one-time prekey
const recipientSignedPreKey = nacl.box.keyPair();
const recipientOneTimePreKey = nacl.box.keyPair();

// Initiator retrieves Recipient's public keys (identity, signed prekey, one-time prekey)
const recipientPublicKeys = {
  identityKey: recipientKeyPair.publicKey,
  signedPreKey: recipientSignedPreKey.publicKey,
  oneTimePreKey: recipientOneTimePreKey.publicKey // Optional
};

const initiatorEphemeralKey = nacl.box.keyPair();

const sharedSecrets = [
  nacl.scalarMult(initiatorEphemeralKey.secretKey, recipientPublicKeys.identityKey),
  nacl.scalarMult(initiatorKeyPair.secretKey, recipientPublicKeys.signedPreKey),
  nacl.scalarMult(initiatorEphemeralKey.secretKey, recipientPublicKeys.signedPreKey)
];

if (recipientPublicKeys.oneTimePreKey) {
  sharedSecrets.push(nacl.scalarMult(initiatorEphemeralKey.secretKey, recipientPublicKeys.oneTimePreKey));
}

const concatenatedSecrets = Buffer.concat(sharedSecrets.map(secret => Buffer.from(secret)));
const masterSecret = crypto.createHash('sha256').update(concatenatedSecrets).digest();

console.log(masterSecret);

// Your message
const message = 'Hello, world!';

// Generate a random nonce for encryption
const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);

// Encrypt the message
const encryptedMessage = nacl.secretbox(naclUtil.decodeUTF8(message), nonce, masterSecret);

// Convert the encrypted message and nonce to a format suitable for transmission
const encryptedMessageBase64 = naclUtil.encodeBase64(encryptedMessage);
const nonceBase64 = naclUtil.encodeBase64(nonce);

// Now you can send `encryptedMessageBase64` and `nonceBase64` to the recipient
console.log(encryptedMessageBase64, nonceBase64);

// On the recipient's side
const receivedEncryptedMessage = naclUtil.decodeBase64(encryptedMessageBase64);
const receivedNonce = naclUtil.decodeBase64(nonceBase64);

const decryptedMessage = nacl.secretbox.open(receivedEncryptedMessage, receivedNonce, masterSecret);
if (decryptedMessage === null) {
    throw new Error('Failed to decrypt message.');
}

const decryptedMessageText = naclUtil.encodeUTF8(decryptedMessage);
console.log(decryptedMessageText); // 'Hello, world!'
