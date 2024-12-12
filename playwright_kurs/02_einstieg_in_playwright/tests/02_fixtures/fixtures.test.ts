import { test, chromium } from '@playwright/test';

test('Page fixtures', async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://playwright.dev/');

    console.log("Text content: ", await page.title());

    page.close();
    browser.close();

});