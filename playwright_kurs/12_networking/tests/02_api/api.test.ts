import {expect, test} from '@playwright/test';

const REPO = 'mein-repo-name';
const USER = 'dpinezich';

test.use({
    extraHTTPHeaders: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token xxx`,
    },
    baseURL: 'https://api.github.com',

});


test.beforeAll('Create repo', async ({request}) => {
    const response = await request.post('user/repos', {
        data: {
            name: REPO,
        }
    });
    expect(response.ok()).toBeTruthy();
});

test('Work with newly created repo', async ({page}) => {
    await page.goto('https://github.com/dpinezich?tab=repositories');
    await expect(page.getByRole('link', {name: REPO})).toHaveCount(1);
})


test('should create a bug report', async ({request}) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] report 1',
            body: 'Bug description',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] report 1',
        body: 'Bug description'
    }));
});

test('should create a feature request', async ({request}) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] request 1',
            body: 'Feature description',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] request 1',
        body: 'Feature description'
    }));
});

/*
test.afterAll('Delete repo', async ({request}) => {
    const response = await request.delete(`/repos/${USER}/${REPO}`, {});

    expect(response.ok()).toBeTruthy();
    expect(response.status() === 204);

});
*/