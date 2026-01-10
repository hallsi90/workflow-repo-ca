import { test, expect } from '@playwright/test';

test('navigation: open first venue and see venue details heading', async ({
  page,
}) => {
  await page.goto('/');

  // Wait for venues to load and open the first one
  const firstVenueLink = page.locator('a[href*="venue"]').first();

  await expect(firstVenueLink).toBeVisible({ timeout: 15000 });
  await firstVenueLink.click();

  // Verify venue details page
  await expect(
    page.getByRole('heading', { name: /venue details/i })
  ).toBeVisible();
});
