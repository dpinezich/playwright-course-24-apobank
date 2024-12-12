import { expect, test } from '@playwright/test';

test('Assertions Mixed', async({ page }) => {

  await page.goto('/');
  await expect(page).toHaveTitle('Bewerben Sie sich hier für ein Konto');

  const checkbox = page.getByRole('checkbox');
  const textarea = page.locator('#textarea');
  const message = "Nette Nachricht";

  await expect(textarea).toBeDisabled();
  await expect(textarea).toBeEmpty();

  await checkbox.check();
  await expect(textarea).toBeEnabled();

  await textarea.fill(message);
  await expect(textarea).toHaveValue(message);

  await page.getByRole('button', { name: 'Registrieren'}).click();

  const feedback = page.locator('.invalid-feedback');
  await expect(feedback).toHaveCount(5);

  for (const message of await feedback.all()) {
    await expect(message).toBeVisible();
  }
});