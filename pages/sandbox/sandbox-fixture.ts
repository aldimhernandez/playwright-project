import { test as baseTest } from '@playwright/test';
import { SandboxPage } from './SandboxPage';

type Fixtures = {
    sandboxPage: SandboxPage;
}

export const test = baseTest.extend<Fixtures>({
    sandboxPage: async ({ page }, use) => {
        const sandboxPage = new SandboxPage(page);
        await use(sandboxPage);
    },
});

export { expect } from '@playwright/test';