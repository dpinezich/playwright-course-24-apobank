import { test } from '@playwright/test';

test('Page fixtures', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    console.log("Text content: ", await page.title());

});