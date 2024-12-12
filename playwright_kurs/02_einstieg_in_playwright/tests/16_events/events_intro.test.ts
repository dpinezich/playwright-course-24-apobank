import { test } from '@playwright/test';

test('Event test', async({ page }) => {

  await page.goto('/');

  page.on('console', message => console.log(message));
  
  await page.getByRole('button', { name: 'Registrieren'}).click();

});