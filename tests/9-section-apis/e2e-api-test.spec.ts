import { test, expect, APIRequestContext } from '@playwright/test';
/**
 * @see: https://playwright.dev/docs/api-testing#establishing-preconditions
 */

const REPO = 'playwright-project';
const USER = 'aldimhernandez';

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext;
let issueNumber: number;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        // All requests we send go to this API endpoint.
        baseURL: 'https://api.github.com',
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/vnd.github.v3+json',
            // Add authorization token to all requests.
            // Assuming personal access token available in the environment.
            'Authorization': `token ${process.env.API_TOKEN}`,
        },
    });
});

test.afterAll(async () => {
    // Dispose all responses.
    await apiContext.dispose();
});

test('create an issue, validate and delete it', async ({ page }) => {

    await test.step('create an issue and save his value', async () => {
        const newIssueResponse = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {
            data: {
                title: '[Feature] created from tests/9-section-apis/e2e-api-test.spec.ts',
                body: 'This is a feature request created from test from this project: tests/9-section-apis/e2e-api-test.spec.ts',
            }
        });
        expect(newIssueResponse.ok()).toBeTruthy();

        const newIssue = await newIssueResponse.json();
        console.log(`Create Issue Response: ${JSON.stringify(newIssue)}`);
        issueNumber = newIssue.number;
        console.log(`Issue created with number: ${issueNumber}`);

        test.info().attach('Create Issue Response: ', {
            body: Buffer.from(JSON.stringify(newIssue, null, 2)),
            contentType: 'text/plain',
        });
    });

    await test.step('verify that last created issue should be first in the list', async () => {
        test.skip(!issueNumber, 'No issue created to verify');

        await page.goto(`https://github.com/${USER}/${REPO}/issues`);
        const lastIssue = page.locator(`a[data-testid="issue-pr-title-link"]`).first();
        await expect(lastIssue).toHaveText('[Feature] created from tests/9-section-apis/e2e-api-test.spec.ts');
    });

    await test.step('delete the created issue (GraphQL)', async () => {
        test.skip(!issueNumber, 'No issue created to delete');

        const queryResponse = await apiContext.post(`/graphql`, {
            data: {
                query: `
                  query {
                    repository(owner: "${USER}", name: "${REPO}") {
                      issue(number: ${issueNumber}) {
                        id
                      }
                    }
                  }
                `
            },
            headers: {
                Authorization: `bearer ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });

        const queryResult = await queryResponse.json();
        console.log(`Query Issue ID Response: ${JSON.stringify(queryResult)}`);
        const issueId = queryResult.data?.repository?.issue?.id;
        expect(issueId).toBeTruthy();

        const deleteResponse = await apiContext.post(`/graphql`, {
            data: {
                query: `
                  mutation {
                    deleteIssue(input: {issueId: "${issueId}"}) {
                      clientMutationId
                    }
                  }
                `
            },
            headers: {
                Authorization: `bearer ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });

        console.log(`Delete Issue Response: ${JSON.stringify(deleteResponse)}`);
        expect(deleteResponse.ok()).toBeTruthy();
        console.log(`Issue with number ${issueNumber} deleted successfully via GraphQL.`);

        test.info().attach('Delete Issue Response: ', {
            body: Buffer.from(JSON.stringify(deleteResponse, null, 2)),
            contentType: 'text/plain',
        });
    });
});
