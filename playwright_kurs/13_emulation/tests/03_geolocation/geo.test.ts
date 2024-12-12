import { test, chromium, devices } from '@playwright/test';

test('Test Geolocation', async () => {

    const iPad = devices['iPad (gen 7) landscape'];
    const browser = await chromium.launch({ headless: false, slowMo: 2000 });

    const context = await browser.newContext({
        userAgent: iPad.userAgent,  // here!
        locale: 'en_GB',
        geolocation: { longitude: -0.118092, latitude: 51.509865 },  // London
        permissions: ['geolocation']
    });

    const page = await context.newPage();

    await page.goto('https://maps.google.com');
    await page.getByRole('button', { name: 'Accept all' }).click();
    await page.getByRole('button', { name: 'Stay on web' }).click();
    await page.screenshot({ path: 'London-iPad.png' });
    await page.waitForTimeout(5000);
});