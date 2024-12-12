 import { test, expect } from '@playwright/test';

test('Test with simple auto retrying assertions', async({ page }) => {

    await page.goto('');

    await expect(page.getByTestId('location')).toContainText('Zürich');

    await expect(page).toHaveTitle('Bewerben Sie sich hier für ein Konto');
    await expect(page).toHaveURL('http://localhost:3001');
})