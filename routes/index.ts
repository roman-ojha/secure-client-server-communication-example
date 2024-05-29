import express from "express";
import authRouter from "./auth";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

router.use("/user/auth", authRouter);

export default router;
