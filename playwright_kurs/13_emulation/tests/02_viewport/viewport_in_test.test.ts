import { test, expect } from '@playwright/test';

test.describe('specific viewport block', () => {
    test.use({ viewport: { width: 1600, height: 1200 } });

    test('my test', async ({ page }) => {
        // ...
    });
});