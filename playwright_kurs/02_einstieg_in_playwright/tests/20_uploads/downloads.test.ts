import { test } from '@playwright/test';

test('Uploads', async({ page }) => {

  await page.goto('/loans.html');

  const upload = page.locator('input[type="file"]');
  await upload.setInputFiles(['downloads/dummy.pdf']);

  // clear
  await upload.setInputFiles([]);

});