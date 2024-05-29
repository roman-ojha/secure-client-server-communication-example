import { type Request, type Response, type NextFunction } from "express";

export function decryptBody(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);
  next();
}
