import crypto from "crypto";

function decryptWithPrivateKey(privateKey: string, encryptedMessage: Buffer) {
  return crypto.privateDecrypt(privateKey, encryptedMessage);
}

function decryptWithPublicKey(publicKey: string, encryptedMessage: Buffer) {
  return crypto.publicDecrypt(publicKey, encryptedMessage);
}

export { decryptWithPrivateKey, decryptWithPublicKey };
