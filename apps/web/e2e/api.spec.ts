import { expect, test } from "@playwright/test";

test.describe("API Integration", () => {
  test("should connect to backend health endpoint", async ({ request }) => {
    // Test backend health endpoint
    const response = await request.get("http://localhost:8000/health");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("status", "OK");
    expect(body).toHaveProperty("timestamp");
    expect(typeof body.timestamp).toBe("string");
  });

  test("should connect to backend root endpoint", async ({ request }) => {
    const response = await request.get("http://localhost:8000/");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("message", "Rent House Review API");
  });
});
