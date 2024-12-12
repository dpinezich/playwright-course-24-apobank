import { test, expect } from '@playwright/test';

test.skip('Not running', async () => {
    console.log("Not printed");
})

test('Skip with condition', async ({ page, browserName}) => {
    test.skip(browserName === 'chromium', 'Not working in Chromium');
    test.skip(await page.getByTestId('testid').count() === 0, 'Skipping because element is not present')
});

test.fixme('Fixme', async () => {

})

test('The test SHOULD fail', async => {
    test.fail();
    expect(2).toEqual(3);
})