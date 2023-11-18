# How to implement WhatsApp End-to-End encryption

Have you thought how WhatsApp ensures secure and private communication between users?

Let's explore what happens behind the hood and how to implement that functionality using Cloud plataform and React Native.

## Signal Protocol

The key for understanding is the adopted protocol, Signal Protocol, developed by Open Whisper Systems in 2013.

The protocol is designed to be secure against several types of attacks, including man-in-the-middle attacks, replay attacks, and others.

See bellow why Signal protocol is popular within messaging applications like WhatsApp, Signal, and Facebook Messenger.

### End-to-End Encryption

The protocol ensures that messages are encrypted on the sender's device and remain encrypted until they reach the recipient's device.

This means that no one else, including the service provider, can read the messages.

It prevents man-in-the-middle or replay attacks.

### Forward and Backward Secrecy

Each message is encrypted with a unique key, and past keys are continually discarded. Hence, even if a key is compromised in the future, it can't be used to decrypt old messages

Also, if a current key is compromised, it can't be used to decrypt future messages. This is achieved through the protocol's continuous key updating mechanism.

### Open Source

The protocol is an open source project, allowing experts to review and audit its security.

This transparency helps in identifying and fixing potential vulnerabilities quickly.

###

Implementing it involves several cryptographic principles and components:

1. **Elliptic Curve Cryptography (ECC):** Signal uses ECC for generating key pairs. Specifically, it uses Curve25519 for key exchange.

1. **Double Ratchet Algorithm:** This algorithm provides cryptographic ratcheting, ensuring that each message has a new encryption key, enhancing security.

1. **PreKeys:** These are a batch of one-time-use public keys that the Signal Protocol uses to allow users to send encrypted messages to each other without both needing to be online at the same time.

1. **Extended Triple Diffie-Hellman (X3DH):** This is used for the initial key exchange to establish a secure session.

### Why Curve2259 instead of RSA?

The answer is simple: **size**

Even though Curve25519 uses shorter keys (256 bits) than RSA (usually over 2048 bits), it's still really secure. Plus, it's quicker and uses less data, which is great for mobile apps.

## Understading the Flow

#TODO sequence number
