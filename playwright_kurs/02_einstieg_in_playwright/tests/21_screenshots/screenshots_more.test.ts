import test, { expect } from "@playwright/test";

test('Screenshots', async ({ page }) => {
    page.goto('/');

    await page.getByRole('button', { name: 'Registrieren'}).click();
    const firstName = page.getByLabel('Vorname');
    await firstName.fill('Roger');


    await page.screenshot({
        path: 'playwright_kurs/02_einstieg_in_playwright/screenshots/screenshot-better.jpg',
        fullPage: true,
        // mask: await firstName.all() // Timeout entfernen
    });

    await expect(page.locator('.invalid-feedback')).toHaveCount(5);

});