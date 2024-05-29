import express from "express";
import { decryptBody } from "../middleware/decryptBody";

const router = express.Router();

router.post("/login", decryptBody, (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.json({});
});

export default router;
