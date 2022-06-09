import Router from "@koa/router";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import _ from "lodash";
import jwt from "jsonwebtoken";
import { ParameterizedContext } from "koa";

export const router = new Router();
const prisma = new PrismaClient();

router.get("/tweets", async (ctx: ParameterizedContext) => {
  const [, token] = ctx.request.headers?.authorization?.split(" ") || [];

  if (!token) {
    ctx.status = 401;
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const tweets = await prisma.tweet.findMany({
      include: {
        user: true,
      },
    });
    ctx.body = tweets;
  } catch (error) {
    ctx.status = 401;
    return;
  }
});

router.post("/tweets", async (ctx: ParameterizedContext) => {
  const [, token] = ctx.request.headers?.authorization?.split(" ") || [];

  if (!token) {
    ctx.status = 401;
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const userId = payload.sub.toString();

    const tweet = await prisma.tweet.create({
      data: {
        userId,
        text: ctx.request.body.text,
      },
    });

    ctx.body = tweet;
  } catch (error) {
    ctx.status = 401;
    return;
  }
});

router.post("/signup", async (ctx: ParameterizedContext) => {
  const saltRounds = 10;
  const passwordHash = bcrypt.hashSync(ctx.request.body.password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: {
        name: ctx.request.body.name,
        userName: ctx.request.body.userName,
        email: ctx.request.body.email,
        password: passwordHash,
      },
    });

    const accessToken = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    const loggedUser = _.assign(user, { accessToken: accessToken });
    const userWithToken = _.omit(loggedUser, ["password"]);
    ctx.body = userWithToken;
  } catch (error) {
    if (error.meta && !error.meta.target) {
      ctx.status = 422;
      ctx.body = "Email or Username already used.";
      return;
    }

    ctx.status = 500;
    ctx.body = "Internal Server Error";
  }
});

router.get("/login", async (ctx: ParameterizedContext) => {
  const [, token] = ctx.request.headers.authorization.split(" ");
  const [email, plainTextPassword] = Buffer.from(token, "base64")
    .toString()
    .split(":");
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const passwordMatch = bcrypt.compare(plainTextPassword, user.password);

  if (!user) {
    ctx.status = 400;
    return;
  }

  if (passwordMatch) {
    const accessToken = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    const loggedUser = _.assign(user, { accessToken: accessToken });
    const userWithToken = _.omit(loggedUser, ["password"]);
    ctx.body = userWithToken;
    return;
  }
  ctx.status = 400;
});
