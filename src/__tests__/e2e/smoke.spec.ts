import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke tests", () => {
  test("home page loads with correct title", async ({ page }) => {
    await page.goto("/web-portfolio/");
    await expect(page).toHaveTitle(/Vu Duc Quyen/i);
  });

  test("hero section is visible with correct heading", async ({ page }) => {
    await page.goto("/web-portfolio/");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Vu Duc Quyen");
  });

  test("WeTax case study anchor exists and is reachable", async ({ page }) => {
    await page.goto("/web-portfolio/");
    const wetaxSection = page.locator("#wetax");
    await expect(wetaxSection).toBeAttached();
  });

  test("WeTax case study page loads", async ({ page }) => {
    await page.goto("/web-portfolio/projects/wetax/");
    await expect(page).toHaveTitle(/Vu Duc Quyen/i);
    await expect(page.getByText(/WeTax/i).first()).toBeVisible();
  });

  test("contact section has email link", async ({ page }) => {
    await page.goto("/web-portfolio/");
    const emailLink = page.getByRole("link", { name: /vuquyen.04092000@gmail.com/i });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:vuquyen.04092000@gmail.com");
  });

  test("nav keyboard navigation works", async ({ page }) => {
    await page.goto("/web-portfolio/");
    await page.keyboard.press("Tab");
    // At least one focusable element should be present
    const focused = page.locator(":focus");
    await expect(focused).toBeAttached();
  });
});
