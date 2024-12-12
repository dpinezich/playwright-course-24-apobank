import { test } from '@playwright/test';

test('iterate and count for multiple matches', async({ page }) => {

  await page.goto('');
  
  await page.check('#success-story');
  // first match...
  await page.fill('#textarea', 'I like working with this bank because....'); 

});