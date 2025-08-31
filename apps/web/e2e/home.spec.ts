import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load and display main elements", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/Create Next App/);

    // Check Next.js logo is visible
    const logo = page.getByAltText("Next.js logo");
    await expect(logo).toBeVisible();

    // Check main navigation links
    const learnLink = page.getByRole("link", { name: /learn/i });
    await expect(learnLink).toBeVisible();

    const docsLink = page.getByRole("link", { name: /read our docs/i });
    await expect(docsLink).toBeVisible();
  });

  test("should navigate to external links", async ({ page }) => {
    await page.goto("/");

    // Test Learn link (should open in new tab)
    const learnLink = page.getByRole("link", { name: /learn/i });
    await expect(learnLink).toHaveAttribute("target", "_blank");
    await expect(learnLink).toHaveAttribute("href", /nextjs\.org\/learn/);
  });
});
