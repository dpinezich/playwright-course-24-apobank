import { test, expect } from '@playwright/test';

test('Test for a specific text', async({ page }) => {

    await page.goto('');

    const strasse = await page.getByLabel('Strasse').fill('Hinterberg 33');
    const geburtsdatum = await page.getByLabel('Geburtsdatum').fill('2000-12-12');
    const email = await page.getByLabel('E-Mail Adresse').fill('roger.villiger@test.de');
    const nachname = await page.getByLabel('Nachname').fill('Villiger');
    const plz = await page.getByLabel('Postleitzahl').fill('8000');

    await page.getByRole('button', { name: /registrieren/i }).click();

    const warning = page.getByText('Ein gültiger Vorname ist erforderlich');
    await expect(warning).toBeVisible();
});