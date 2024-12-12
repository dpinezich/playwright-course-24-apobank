import { test } from '@playwright/test';

test('Test for a specific label', async({ page }) => {

    await page.goto(''); // kein Inhalt aufgrund userer Konfiguration
  
    const firstName = page.getByLabel('Vorname');
    await firstName.fill('Roger');
  	await firstName.clear();
});