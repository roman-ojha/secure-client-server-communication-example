import crypto from "crypto";

function encryptWithPublicKey(publicKey: string, message: string) {
  const bufferMessage = Buffer.from(message, "utf8");

  return crypto.publicEncrypt(publicKey, bufferMessage);
}

export { encryptWithPublicKey };
