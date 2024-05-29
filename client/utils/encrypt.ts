import { API_PUBLIC_KEY } from "@/data/constants";
import crypto from "crypto";

function encryptWithPublicKey(message: string) {
  // Generate a random AES key
  const aesKey = crypto.randomBytes(32); // 256-bit key

  // Encrypt the message using AES
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, iv);
  let encryptedMessage = cipher.update(message, "utf8", "base64");
  encryptedMessage += cipher.final("base64");

  // Encrypt the AES key using RSA
  const encryptedKey = crypto.publicEncrypt(API_PUBLIC_KEY, aesKey);

  // Combine the encrypted key and the IV with the encrypted message
  const result = {
    encryptedKey: encryptedKey.toString("base64"),
    iv: iv.toString("base64"),
    encryptedMessage,
  };

  return result;
}

export { encryptWithPublicKey };
