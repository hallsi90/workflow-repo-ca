import { test, expect } from '@playwright/test';

function getEmailInput(page) {
  return page.locator(
    'input[type="email"], input[name="email"], input#email, input[autocomplete="email"]'
  );
}

function getPasswordInput(page) {
  return page.locator(
    'input[type="password"], input[name="password"], input#password, input[autocomplete="current-password"]'
  );
}

test.describe('login', () => {
  test('user can log in with valid credentials from environment variables', async ({
    page,
  }) => {
    const email = process.env.E2E_EMAIL;
    const password = process.env.E2E_PASSWORD;

    expect(email, 'E2E_EMAIL must be set in .env').toBeTruthy();
    expect(password, 'E2E_PASSWORD must be set in .env').toBeTruthy();

    await page.goto('/login/');

    const emailInput = getEmailInput(page);
    const passwordInput = getPasswordInput(page);

    await expect(emailInput.first()).toBeVisible();
    await emailInput.first().fill(email);

    await expect(passwordInput.first()).toBeVisible();
    await passwordInput.first().fill(password);

    await page.getByRole('button', { name: /log in|login/i }).click();

    await expect(page).not.toHaveURL(/\/login\/?/);
  });

  test('user sees an error message with invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login/');

    const emailInput = getEmailInput(page);
    const passwordInput = getPasswordInput(page);

    await expect(emailInput.first()).toBeVisible();
    await emailInput.first().fill('wrong@example.com');

    await expect(passwordInput.first()).toBeVisible();
    await passwordInput.first().fill('incorrectpassword');

    await page.getByRole('button', { name: /log in|login/i }).click();

    await expect(
      page.locator('[role="alert"], .error, .message').first()
    ).toBeVisible();
  });
});
