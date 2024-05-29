import express from "express";
import router from "./routes";

const app = express();
const PORT = 8080;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
