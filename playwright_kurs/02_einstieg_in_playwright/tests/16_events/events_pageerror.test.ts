import { test } from '@playwright/test';

test('Pageerror test', async({ page }) => {

  page.on('pageerror', err => {
    console.log(`Error: ${err.name}, ${err.message}`);
  });

  await page.goto('/');
  
  await page.getByRole('button', { name: 'Registrieren'}).click();

});