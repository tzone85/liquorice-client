import { expect, test } from "@playwright/test";

test("loads fixture leaderboard and reveals more on click", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Hygienica Leaderboard/i }),
  ).toBeVisible();
  await expect(page.getByTestId("leader-row-1")).toBeVisible();
  await expect(
    page.getByTestId("leader-row-1").getByText("Nancy Meke"),
  ).toBeVisible();
  await page.getByRole("button", { name: /load more/i }).click();
  await expect(page.getByTestId("leader-row-6")).toBeVisible();
});

test("shows the current user profile", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Nancy Meke/).first()).toBeVisible();
});
