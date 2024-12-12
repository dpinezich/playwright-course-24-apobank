import { expect, test } from '@playwright/test';

const homeTitle = 'Bewerben Sie sich hier für ein Konto';
const savingsTitle = 'Wir nehmen ihr Geld und lassen es arbeiten!'

test('navigation intro', async({ page }) => {

  await page.goto('/');
  
  await page.goto('/savings.html', {timeout: 5000});
  await expect(page).toHaveTitle(savingsTitle);

  await page.goBack({timeout: 5000});
  await expect(page).toHaveTitle(homeTitle);

  await page.goForward({timeout: 8000});
  await expect(page).toHaveTitle(savingsTitle);

  await page.reload({timeout: 4000});
  await expect(page).toHaveTitle(savingsTitle);

});