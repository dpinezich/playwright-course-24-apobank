import { expect, test } from '@playwright/test';

test('Event and Pageerror', async({ page }) => {

  page.on('console', message => {
    console.log(message);
    expect.soft(message.type()).not.toEqual('error');
  });

  page.on('pageerror', err => {
    console.log(`Error: ${err.name}, ${err.message}`);
    expect.soft(err.name).not.toEqual('Error');
  });

  await page.goto('/');
  await page.getByRole('button', { name: 'Registrieren'}).click();
});