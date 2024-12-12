import { test } from '@playwright/test';

test('multi matches fail', async({ page }) => {

  await page.goto('');

  await page.getByRole('link').click();

});