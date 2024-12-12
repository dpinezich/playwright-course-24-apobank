import { test } from '@playwright/test';

test('iterate and count for multiple matches', async({ page }) => {

  await page.goto('');

  const form = page.locator('form');

  await form.getByLabel('Ich möchte meine Erfolge mit Playwright teilen:').click();
  await form.locator('textarea').fill('Alles super!');
});