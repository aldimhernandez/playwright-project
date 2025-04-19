import { test, expect } from '@playwright/test';

/**
 * @description: example of lesson 74 - Mocking API calls
 * @see: https://playwright.dev/docs/mock
 */
test("mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Strawberry', id: 21 }];
        await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
});

test('mocks a fruit list adding "Ice Cream" and calls api', async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Ice Cream', id: 21 });
        await route.fulfill({ response, json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the Ice Cream is visible
    await expect(page.getByText('Ice Cream')).toBeVisible();
});
