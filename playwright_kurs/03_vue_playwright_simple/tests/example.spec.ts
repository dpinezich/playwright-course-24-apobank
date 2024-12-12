import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('heading', { name: 'Hello David Pinezich' }).click();
  //....

});