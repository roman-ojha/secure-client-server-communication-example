import { type Request, type Response, type NextFunction } from "express";
import { API_PRIVATE_KEY } from "../data/constants";
import crypto from "crypto";
import { decryptWithPrivateKey } from "../utils/decrypt";

export function decryptBody(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  const { fields } = req.body;
  console.log(req.body);

  fields.forEach((field: string) => {
    if (data[field]) {
      const encryptedMessage = data[field];
      const decryptedData = decryptWithPrivateKey(encryptedMessage);
      data[field] = decryptedData;
    }
  });
  delete data["fields"];
  req.body = data;
  next();
}
