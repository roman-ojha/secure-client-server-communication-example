import express from "express";
import router from "./routes";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
