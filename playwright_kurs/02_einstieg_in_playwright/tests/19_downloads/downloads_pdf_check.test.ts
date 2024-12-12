import { expect, test } from '@playwright/test';

test('Downloads pdf check', async({ page }) => {

  await page.goto('/savings.html');

  const download = page.waitForEvent('download');
  await page.getByText('Jetzt Angebot herunterladen').click();
  const dl = await download;

  expect(await dl.failure()).toBeNull();

});