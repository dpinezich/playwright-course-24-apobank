import { test } from '@playwright/test';

test('filter specific cell', async({ page }) => {

  await page.goto('/savings.html');

  const rows = page.getByRole('row');
  console.log(await rows.count());

  const row = page.getByRole('row')
  .filter({hasText: 'Credit Selenium'})
  .getByRole('cell')
  .nth(1)

  console.log(await row.textContent());

});