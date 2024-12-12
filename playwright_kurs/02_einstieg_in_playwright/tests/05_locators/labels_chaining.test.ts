import { test } from '@playwright/test';

test('Test for a specific label', async({ page }) => {

    await page.goto(''); // kein Inhalt aufgrund userer Konfiguration
  
    await page.getByLabel('Vorname').fill('Roger');
});