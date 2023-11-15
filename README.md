# WhatsApp Encryption

This project explores how WhatsApp ensures secure and private communication between users.

## WhatsApp Encryption Flow

1. **User Installs WhatsApp**

   - Download and install on mobile device.

2. **Account Creation and Verification**

   - Create account and verify phone number.

3. **Generation of Encryption Keys**

   - Public Key: Available for others to encrypt messages.
   - Private Key: Stored on device for decrypting messages.

4. **Exchange of Keys**

   - Public keys exchanged when initiating a chat.

5. **Encryption of the Message**

   - Message encrypted using recipient's public key.

6. **Transmission to Server**

   - Encrypted message sent to WhatsApp servers.

7. **Notification to Recipient**

   - Server notifies recipient of new message.

8. **Message Delivery**

   - Recipient's WhatsApp downloads encrypted message.

9. **Decryption by the Recipient**

   - Private key decrypts the message for reading.

10. **Secure Storage**

- Encrypted messages stored on devices.

## Stack

**Goal:** Aim to deliver a robust and user-friendly mobile application, backed by an extensible and scalable serverless infrastructure.

### React Native for Mobile Development

- **Cross-Platform Compatibility**: Enables development of both iOS and Android apps with a single codebase, enhancing efficiency.
- **Rich Ecosystem**: Offers a wide range of libraries and tools, facilitating rapid development and deployment.
- **Community Support**: Benefits from a large community, providing extensive resources and support.

### Node.js for Backend Development

- **Efficiency and Performance**: Node.js is known for its efficiency and fast performance, especially in handling asynchronous operations.
- **Unified Language**: Using JavaScript across both the frontend and backend streamlines development and reduces context switching.
- **NPM Ecosystem**: Access to a vast array of libraries and tools through NPM enhances development capabilities and speeds up the process.

### AWS Serverless Architecture

- **Scalability**: AWS Lambda and API Gateway automatically scale to handle request load, ideal for fluctuating traffic.
- **Cost-Effective**: Pay-for-use model ensures cost efficiency, with payment only for the compute time used.
- **Reduced Operational Overhead**: Eliminates the need for server maintenance, allowing focus on core development.
- **Integration Capabilities**: Seamlessly integrates with other AWS services.

## Why This Stack?

- This stack is in line with current industry trends, ensuring the project remains relevant and up-to-date.
- Cloud plataform provides high reliability, scalability and performance with low latency besides the seamless experiencie to manage infrastructure.


## References

[WhatsApp
Encryption Overview
Technical white paper](https://scontent.fcgh3-1.fna.fbcdn.net/v/t39.8562-6/383236184_722587863039320_5040651063228680393_n.pdf?_nc_cat=101&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=TMCHR3mTV-oAX9qZk_8&_nc_ht=scontent.fcgh3-1.fna&oh=00_AfCPY6_en6qwm43ca8JXTc7bSLCx-ff0DWcO6_HaztMryA&oe=65581F84)

[WhatsApp‘s End to End Encryption, How does it work?](https://medium.com/@panghalamit/whatsapp-s-end-to-end-encryption-how-does-it-work-80020977caa0)
