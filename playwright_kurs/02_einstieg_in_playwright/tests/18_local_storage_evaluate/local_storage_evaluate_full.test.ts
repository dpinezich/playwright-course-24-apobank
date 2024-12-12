import { expect, test } from '@playwright/test';

test('Local Storage', async({ page }) => {

  await page.goto('/');

  const vorname = await page.getByLabel('Vorname').fill('Roger');
  const strasse = await page.getByLabel('Strasse').fill('Hinterberg 33');
  const geburtsdatum = await page.getByLabel('Geburtsdatum').fill('2000-12-12');
  const email = await page.getByLabel('E-Mail Adresse').fill('roger.villiger@test.de');
  const nachname = await page.getByLabel('Nachname').fill('Villiger');
  const plz = await page.getByLabel('Postleitzahl').fill('8000');

  await page.getByRole('button', { name: 'Speichern'}).click();

  const store = await page.evaluate(() => window.localStorage);
  console.log(store)

  // clear
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

});