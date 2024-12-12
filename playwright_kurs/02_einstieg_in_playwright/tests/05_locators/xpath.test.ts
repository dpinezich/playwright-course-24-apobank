import { test, expect } from '@playwright/test';

test('Test for a specific xpath', async({ page }) => {

    await page.goto('');
  
    await page.locator('.needs-validation label[for="firstName"]').fill('Rodrigo');
    await page.locator('//form//button[2]').click();

    await expect(page.getByText('Ein gültiger Vorname ist erforderlich')).toBeVisible();
});