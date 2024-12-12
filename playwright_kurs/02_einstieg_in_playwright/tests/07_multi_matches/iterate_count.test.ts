import { expect, test } from '@playwright/test';

test('iterate and count for multiple matches', async({ page }) => {

  await page.goto('');
  await page.getByRole('button', {name: 'Registrieren'}).click();

  const feedback = page.locator('.invalid-feedback');

  await expect(feedback).toHaveCount(5);

  // Count
  for(const message of await feedback.all()) {
    console.log(`${await message.textContent()}`);
  }

});