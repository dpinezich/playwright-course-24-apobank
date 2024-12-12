import { expect, test } from '@playwright/test';

test('checking with errors', async({ page }) => {

  await page.goto('/savings.html');

  const dep = page.getByTestId('deposit')
  const per = page.getByTestId('period')
  const res = page.getByTestId('result')

  await dep.fill('1000');

  await per.selectOption({label: '5 Jahre'});

  await expect(res).toContainText('Nach 5 Jahren haben Sie $500.00 bei uns angespart')
});