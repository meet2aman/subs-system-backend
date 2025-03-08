import express from "express";
import "dotenv/config";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json()); // json parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/v1/auth", authRouter); // auth routes
app.use("/api/v1/users", userRouter); // user routes
app.use("/api/v1/subscriptions", subscriptionRouter); // subscription routes
app.use(errorMiddleware); // error handling middleware

app.get("/", (req, res) => {
  console.log(`Welcome to Subscription Tracker Backend API`);
  res.status(200).send({
    message: "Welcome to Subscription Tracker Backend API",
    success: true,
  });
});

app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
  await connectToDatabase();
});

export default app;
