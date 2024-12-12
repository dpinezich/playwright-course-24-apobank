import { expect, test } from '@playwright/test';

test('fill test', async({ page }) => {

  await page.goto('/');

  await page.getByLabel('Vorname').fill('Testmann')

  // Das selbe für das Geburtsdatum

});