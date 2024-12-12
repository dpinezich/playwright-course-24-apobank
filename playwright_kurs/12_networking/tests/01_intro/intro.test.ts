import { test, expect } from '@playwright/test';

test("Response / Request", async ({ page }) => {
    
    const response = await page.goto('https://playwright.dev/');

    if (response === null) return;

    console.log(response.url());
    console.log(response.status());
    console.log(response.ok());

    expect(response.ok()).toBeTruthy();

    console.log(await response.allHeaders());
    console.log(await response.headersArray());

    console.log(await response.body());

});