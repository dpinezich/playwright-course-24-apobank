import { test } from '@playwright/test';

test('filter specific row', async({ page }) => {

  await page.goto('/savings.html');

  const rows = page.getByRole('row');
  console.log(await rows.count());

  const row = page.getByRole('row').filter({hasText: '10%'});

  console.log(await row.textContent());

});