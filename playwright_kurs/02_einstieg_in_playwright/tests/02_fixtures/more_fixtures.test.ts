import { test } from '@playwright/test';

test('More fixtures', async ({ browserName, browser, context, page }) => {

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

});