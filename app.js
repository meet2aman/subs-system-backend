import express from "express";
import "dotenv/config";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", () => {
  console.log(`Welcome to Subscription Tracker Backend API`);
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
});

export default app;
