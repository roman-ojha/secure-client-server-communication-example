const crypto = require("crypto");
import fs from "fs";

function genKeyPair() {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });

  const privateKey = keyPair.privateKey;
  const publicKey = keyPair.publicKey;
  console.log(publicKey);
  console.log(privateKey);

  fs.writeFileSync(__dirname + "/id_rsa_pub.pem", keyPair.publicKey);
  fs.writeFileSync(__dirname + "/id_rsa_priv.pem", privateKey);
}

genKeyPair();
