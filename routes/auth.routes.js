import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", async (req, res) => {
  const { email, password } = await req.body;

  try {
    /// connect to db
    res
      .send({
        message: `Sign up successfully`,
      })
      .status(200);
  } catch (error) {
    res
      .send({
        message: `Sign up failed ${error.message}`,
      })
      .status(500);
  }
});

authRouter.post("/sign-in", async (req, res) => {});
authRouter.post("/sign-out", async (req, res) => {});

export default authRouter;
