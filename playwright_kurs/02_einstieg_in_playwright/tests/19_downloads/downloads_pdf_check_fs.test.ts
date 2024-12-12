import { expect, test } from '@playwright/test';
import fs from 'fs';

test('Downloads pdf check fs', async({ page }) => {

  await page.goto('/savings.html');

  const download = page.waitForEvent('download');
  await page.getByText('Jetzt Angebot herunterladen').click();
  const dl = await download;

  const suggestedFilename = dl.suggestedFilename();
  const filePath = 'playwright_kurs/02_einstieg_in_playwright/downloads/' + suggestedFilename;
  await dl.saveAs(filePath);

  expect(await dl.failure()).toBeNull();
  expect(fs.existsSync(filePath)).toBeTruthy();

  const fileSizeBytes = fs.statSync(filePath).size;
  expect(fileSizeBytes).toBeLessThan(20_000);

});