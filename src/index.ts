import { Hono } from "hono";
import router from "./router";

const app = new Hono();

app.route("api", router);

export default app;
