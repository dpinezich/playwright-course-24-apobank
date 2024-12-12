import { expect, test } from '@playwright/test';

test('Assertions Mixed', async({ page }) => {

  await page.goto('/');
  // Expect Title

  const checkbox = page.getByRole('checkbox');
  const textarea = page.locator('#textarea');
  const message = "Nette Nachricht";

  // Expect disabled and empty textarea

  await checkbox.check();
  // Was hat sich geändert, kann expected werden?

  await textarea.fill(message);
  // await expect(textarea)...... inhalt? 

  await page.getByRole('button', { name: 'Registrieren'}).click();

  const feedback = page.locator('.invalid-feedback');
  // wieviele invalid-feedbacks gibt es?

  for (const message of await feedback.all()) {
    await expect(message).toBeVisible();
  }
});