import { test } from '@playwright/test';

test('Test for a specific role', async({ page }) => {

    await page.goto('');
  
    const firstName = page.getByLabel('Vorname');
    await firstName.fill('Roger');
  	await firstName.clear();
      
    await page.getByLabel('Vorname').fill('Sandra');

    await page.getByRole('button', { name: 'Registrieren' }).click();

});