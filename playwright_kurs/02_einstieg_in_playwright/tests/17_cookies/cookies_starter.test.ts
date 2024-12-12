import { test } from '@playwright/test';

test('Cookies starter', async({ page }) => {

  await page.goto('/');

  console.log(await page.context().cookies());

  await page.context().addCookies([{
    name: 'cookieX',
    value: 'Tasty cookie',
    url: 'https://playwright.dev/'
  }]);

  console.log(await page.context().cookies());

  await page.context().clearCookies();

  console.log(await page.context().cookies());
  });