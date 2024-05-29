import crypto from "crypto";
import { API_PRIVATE_KEY } from "../data/constants";

function decryptWithPrivateKey(encryptedMessage: string) {
  const bufferEncryptedData = Buffer.from(encryptedMessage, "base64");
  const decryptedMessage = crypto.privateDecrypt(
    API_PRIVATE_KEY,
    bufferEncryptedData
  );
  return decryptedMessage.toString("utf8");
}

function decryptWithPublicKey(publicKey: string, encryptedMessage: Buffer) {
  return crypto.publicDecrypt(publicKey, encryptedMessage);
}

export { decryptWithPrivateKey, decryptWithPublicKey };
