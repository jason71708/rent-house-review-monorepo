const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/cors"), {
  origin: ["http://localhost:3000"],
});

fastify.get("/", async () => {
  return { message: "Rent House Review API" };
});

fastify.get("/health", async () => {
  return { status: "OK", timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 8000, host: "0.0.0.0" });
    fastify.log.info("Server listening on http://localhost:8000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
