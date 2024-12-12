import { test } from '@playwright/test';

test('test first last nth', async({ page }) => {

  await page.goto('');

  const buttons = page.getByRole('button');

  console.log(await buttons.first().textContent());
  console.log(await buttons.last().textContent());
  console.log(await buttons.nth(1).textContent());

});