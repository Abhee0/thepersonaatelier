import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Provide a SPA fallback to index.html for unknown routes
app.notFound(async (c) => {
    // @ts-ignore - ASSETS binding is injected by Cloudflare Workers
    if (c.env && c.env.ASSETS) {
        // @ts-ignore
        return c.env.ASSETS.fetch(new Request(new URL("/", c.req.url), c.req.raw));
    }
    return c.text("Not Found", 404);
});

export default app;
