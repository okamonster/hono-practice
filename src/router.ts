import { Hono } from "hono";

const router = new Hono();

router.get("/", (c) => {
  const res = c.json({
    message: "Hello Hono!",
  });

  return res;
});

router.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  const res = c.json({
    message: `Hello ${name}!`,
  });

  return res;
});

export default router;
