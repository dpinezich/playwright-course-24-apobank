import { expect, test } from '@playwright/test';

const name = 'Roger';

test('Dialog test', async({ page }) => {

  await page.goto('/');

  const inp = page.getByLabel('Vorname');
  await inp.fill(name);
  await expect(inp).toHaveValue(name);

  await page.getByRole('button', { name: 'Zurücksetzen' }).click();
  await expect(inp).toHaveValue(name)

});