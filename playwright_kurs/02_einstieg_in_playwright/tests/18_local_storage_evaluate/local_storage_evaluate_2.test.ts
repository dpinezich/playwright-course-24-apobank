import { expect, test } from '@playwright/test';

const name = 'Roger';

test('Local Storage', async({ page }) => {

  await page.goto('/');

  const inp = page.getByLabel('Vorname');
  await inp.fill(name);
  await page.getByRole('button', { name: 'Speichern'}).click();

  const store = await page.evaluate(() => window.localStorage);
  console.log(store)

  // clear
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(inp).toHaveValue('');

});