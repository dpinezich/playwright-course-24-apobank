import { test, expect } from '@playwright/test';

test('Test with simple auto retrying assertions', async({ page }) => {

    await page.goto('/');
    
    expect(page.getByTestId('location')).toHaveValue('Zürich');

    await expect(page).toHaveTitle('Bewerben Sie sich hier für ein Konto');
    await expect(page).toHaveURL('http://localhost:3001');
})