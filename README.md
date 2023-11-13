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
Technical white paper](
https://scontent.fcgh3-1.fna.fbcdn.net/v/t39.8562-6/384251896_820338303082371_8514785982310046047_n.pdf?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ItX8NTqxgW8AX_z_v79&_nc_oc=AQnqzS67OnrijAwDv13ngY_TuI5gcYIFL2mJQAVCMN1ZcdXLJxVvX4nCv5yIakT03RZeWqDM0ZEJJN_lFnv2mFEH&_nc_ht=scontent.fcgh3-1.fna&oh=00_AfAYp4K1ozEx1mxVYeiI-3MDyxUs4CBszQi1wbLt1mKJog&oe=65539411)
