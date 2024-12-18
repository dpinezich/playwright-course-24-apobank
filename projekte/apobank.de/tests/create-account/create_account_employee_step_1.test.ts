import { test, expect } from '@playwright/test';

test.describe('test infotext', { tag: ['@notimportant' ] }, () => {
  test('infotext contains Sie', async ({ page }) => {
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-accept-all-button').click();
    await page.getByRole('img', { name: 'icon-tooltip' }).click();
    await expect(page.locator('form[name="welcome"]')).toContainText('Sie');
  });
});

test.describe('test checkboxes', { tag: ['@notimportant' ] }, () => {
  test('all wrong', async ({ page }) => {
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-accept-all-button').click();
    await page.locator('[data-test-id="next-btn-welcome"]').click();

    const errors = page.locator('form[name="welcome"] div').locator('[data-test-id="error-message"]')
    await expect(errors).toHaveCount(5);

  });

  test('one correct', async ({ page }) => {
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-accept-all-button').click();
    // first checkbox
    await page.getByLabel('Ich bin Angestellte bzw. Angestellter der akademischen Heilberufe. ').check();

    // Check errors
    await page.locator('[data-test-id="next-btn-welcome"]').click();
    const errors = page.locator('form[name="welcome"] div').locator('[data-test-id="error-message"]')
    await expect(errors).toHaveCount(4);
  });


  test('two correct', async ({ page }) => {
    await page.goto('https://portal.banking.apobank.de/create-account/employee');
    await page.getByTestId('uc-accept-all-button').click();
    // first checkbox
    await page.getByLabel('Ich bin Angestellte bzw. Angestellter der akademischen Heilberufe. ').check();

    // second checkbox
    await page.getByLabel('Ich möchte ein Konto für mich alleine eröffnen.').check();
    await page.getByTestId('input-checkbox').nth(2).check();

    // Check errors
    await page.locator('[data-test-id="next-btn-welcome"]').click();
    const errors = page.locator('form[name="welcome"] div').locator('[data-test-id="error-message"]')
    await expect(errors).toHaveCount(4);
  });
});



