import { test } from '@playwright/test';

test('Downloads', async({ page }) => {

  await page.goto('/savings.html');

  const download = page.waitForEvent('download');
  await page.getByText('Jetzt Angebot herunterladen').click();
  const dl = await download;

  const suggestedFilename = dl.suggestedFilename();
  const filePath = 'playwright_kurs/02_einstieg_in_playwright/downloads/' +  suggestedFilename;
  await dl.saveAs(filePath)

});