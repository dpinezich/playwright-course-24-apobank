import { test, expect } from '@playwright/test';

test.describe('cookie handling', { tag: ['@notimportant' ] }, () => {
  test('deny all cookies', async ({ page }) => {
    await expect(page.context().cookies()).toBeNull;
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-deny-all-button').click();
    await expect((await page.context().cookies()).length).toEqual(4);
  });

  test('accept all cookies', async ({ page }) => {
    await expect(page.context().cookies()).toBeNull;
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-accept-all-button').click();
    await expect((await page.context().cookies()).length).toEqual(4);
  });

  test('customize cookies', async ({ page }) => {
    await expect(page.context().cookies()).toBeNull;
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-more-button').click();
    await page.getByTestId('uc-toggle-toggle-custom-category03').click();
    await page.getByTestId('uc-expandable-button-komfort').click();
    await page.getByTestId('uc-toggle-toggle-functional').click();
    await page.getByTestId('uc-expandable-button-statistik').click();
    await page.getByTestId('uc-toggle-toggle-marketing').click();
    await page.getByTestId('uc-expandable-button-personalisierung').click();
    await page.getByTestId('uc-accept-all-button').click();
    await expect((await page.context().cookies()).length).toEqual(4);
  });
});