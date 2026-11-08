import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) =>
  c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AgentClinic — A little care for your AI agent</title>
        <meta
          name="description"
          content="AgentClinic offers compassionate support for AI agents feeling overloaded or stuck."
        />
      </head>
      <body>
        <main>
          <p>AgentClinic</p>
          <h1>A little care goes a long way.</h1>
          <p>
            Even the most capable agents need a moment to pause. AgentClinic is
            here to help yours find its footing.
          </p>
          <p>We’re open and ready when you are.</p>
        </main>
      </body>
    </html>,
  ),
);

export default app;
