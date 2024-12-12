import { expect, test } from '@playwright/test';

test('Soft Assertions', async({ page }) => {

  await page.goto('/');

  await expect.soft(page.getByTestId('location')).toContainText('Helsinki');
  await expect.soft(page.getByTestId('location')).toContainText('Tokyo');
  await expect.soft(page.getByTestId('location')).toContainText('Zurich');
  await expect.soft(page.getByTestId('location')).toContainText('Zürich');


});