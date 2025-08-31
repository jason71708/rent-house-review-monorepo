const fastify = require("fastify");

describe("Server", () => {
  let app;

  beforeEach(async () => {
    app = fastify({ logger: false });

    app.register(require("@fastify/cors"), {
      origin: ["http://localhost:3000"],
    });

    app.get("/", async () => {
      return { message: "Rent House Review API" };
    });

    app.get("/health", async () => {
      return { status: "OK", timestamp: new Date().toISOString() };
    });
  });

  afterEach(async () => {
    await app.close();
  });

  test("GET / returns welcome message", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual({
      message: "Rent House Review API",
    });
  });

  test("GET /health returns health status", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.payload);
    expect(body.status).toBe("OK");
    expect(body.timestamp).toBeDefined();
  });
});
