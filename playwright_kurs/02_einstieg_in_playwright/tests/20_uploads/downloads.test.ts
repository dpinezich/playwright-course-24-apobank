import { test } from '@playwright/test';

test('Uploads', async({ page }) => {

  await page.goto('/loans.html');

  const upload = page.locator('input[type="file"]');
  await upload.setInputFiles(['playwright_kurs/02_einstieg_in_playwright/downloads/dummy.pdf']);

  // clear
  await upload.setInputFiles([]);

});