import {test} from '@playwright/test';

test.describe('Feature Group', () => {

    // a before all would be cool!

    test.beforeEach('Description before', async ({page}) => {
        console.log('Before each');
    });

    test('Test 1', async ({page}) => {
        console.log("Test 1");
    });

    test('Test 2', async ({page}) => {
        console.log("Test 2");
    });

    test.afterEach('Description after', async () => {
        console.log('After each');
    });

    test.afterAll('Finally', async () => {
        console.log('one more time..');
    });

});
