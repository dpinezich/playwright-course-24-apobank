import { test, expect } from '@playwright/test';

test.beforeEach('Description before', async ({page}) => {
    console.log('Before each');
    page.goto('');
});

test('Test 1', async ({ page }) => {
    await page.goto('');
    console.log("Test 1");
});

test('Test 2', async ({ page }) => {
    await page.goto('');
    console.log("Test 2");
});

test.afterEach('Description after', async ({page}) => {
    console.log('After each');
    page.goto('');
});

test.afterAll('Finally', async ({page}) => {
    console.log('one more time..');
    page.goto('');
});

