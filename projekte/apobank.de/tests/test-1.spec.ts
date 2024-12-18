import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal.banking.apobank.de/create-account/employee');
  await page.getByTestId('uc-more-button').click();
  await page.getByTestId('uc-toggle-toggle-custom-category03').click();
  await page.getByTestId('uc-expandable-button-komfort').click();
  await page.getByTestId('uc-toggle-toggle-functional').click();
  await page.getByTestId('uc-expandable-button-statistik').click();
  await page.getByTestId('uc-toggle-toggle-marketing').click();
  await page.getByTestId('uc-expandable-button-personalisierung').click();
  await page.getByTestId('uc-accept-all-button').click();
});