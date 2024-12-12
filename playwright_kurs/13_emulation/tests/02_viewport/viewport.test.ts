import { test, expect } from '@playwright/test';

test.use({
    viewport: { width: 1600, height: 1200 },
});

test('my test', async ({ page }) => {
    // ...
});