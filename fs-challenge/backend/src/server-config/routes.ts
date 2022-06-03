import Router from "@koa/router";

export const router = new Router();

router.get("/tweets", (ctx) => {
  ctx.body = [];
});

router.post("/tweets", (ctx) => {
  ctx.body = {};
});
