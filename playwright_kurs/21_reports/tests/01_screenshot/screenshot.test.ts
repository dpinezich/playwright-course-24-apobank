import { test } from '@playwright/test';

test('home page screenshot', async ({ page }, testInfo) => {
    await page.goto('https://checklyhq.com');

    const homeScreenshot = await page.screenshot();
    await testInfo.attach('Home Page', {
        body: homeScreenshot,
        contentType: 'image/png',
    });

    await page.click('nav a[href="/customers/"]');
    const customersScreenshot = await page.screenshot();
    await testInfo.attach('Customers Page', {
        body: customersScreenshot,
        contentType: 'image/png',
    });
});
