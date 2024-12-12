import test, { expect } from "@playwright/test";

test('Screenshots', async ({ page }) => {
    page.goto('/');

    await page.getByRole('button', { name: 'Registrieren'}).click();

    const s: Promise<Buffer> = page.screenshot({
        path: 'screenshots/screenshot.png'
    });

    await expect(page.locator('.invalid-feedback')).toHaveCount(6);

});