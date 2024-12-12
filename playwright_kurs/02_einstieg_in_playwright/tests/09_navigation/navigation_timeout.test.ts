import { expect, test } from '@playwright/test';

const homeTitle = 'Bewerben Sie sich hier für ein Konto';
const savingsTitle = 'Wir nehmen ihr Geld und lassen es arbeiten!'

test('navigation intro', async({ page }) => {

  await page.goto('/', {waitUntil: 'load', timeout: 3000}); // ms

});