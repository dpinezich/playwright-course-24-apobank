import { expect, test } from '@playwright/test';

test('checking with errors', async({ page }) => {

  await page.goto('');

  const checkbox = page.getByRole('checkbox');
  const textarea = page.locator('#textarea');
  const message = 'Workshop Workshop Workshop';

  await checkbox.check();

  await textarea.fill(message);

  await expect(textarea).toHaveValue(message);

});