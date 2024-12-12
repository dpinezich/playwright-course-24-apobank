import { expect, test } from '@playwright/test';

const homeTitle = 'Bewerben Sie sich hier für ein Konto';
const savingsTitle = 'Wir nehmen ihr Geld und lassen es arbeiten!'

test('navigation intro', async({ page }) => {

  await page.goto('/');
  
  await page.goto('/savings.html');
  await expect(page).toHaveTitle(savingsTitle);

  await page.goBack();
  await expect(page).toHaveTitle(homeTitle);

  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);

  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);

});