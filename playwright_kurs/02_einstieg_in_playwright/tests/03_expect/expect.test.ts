import { test, expect } from '@playwright/test';

test('More fixtures', async () => {
  
    expect('a').toEqual('a')
  	expect(2).toBeLessThan(3);
  	expect(null).toBeFalsy();
});

test('Test with simple auto retrying assertions', async({ page }) => {

    await page.goto('');

    await expect(page).toHaveTitle('Bewerben Sie sich hier für ein Konto');
    await expect(page).toHaveURL('http://localhost:3001');
})