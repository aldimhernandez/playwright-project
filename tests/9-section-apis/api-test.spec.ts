/**
 * @description: This test file demonstrates how to use Playwright's API testing capabilities to create issues on a GitHub repository.
 * It includes two tests: one for creating a bug report and another for creating a feature request.
 * Both tests are skipped by default, but you can delete .skip to run them.
 * @see: https://playwright.dev/docs/api-testing#writing-tests
 */

import { test, expect } from '@playwright/test';

const REPO = 'playwright-project';
const USER = 'aldimhernandez';

test.skip('should create a bug report', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] report 1',
            body: 'This is a bug report created from playwright api test',
        }
    });
    expect(newIssue.status()).toBe(201);

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] report 1',
        body: 'This is a bug report created from playwright api test',
    }));
});

test.skip('should create a feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] request 1',
            body: 'This is a feature request created from playwright api test',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] request 1',
        body: 'This is a feature request created from playwright api test',
    }));
});
