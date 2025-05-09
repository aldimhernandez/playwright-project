import { test, Browser, Page, expect } from '@playwright/test';

/**
 * @description Ejemplo de la sección 3 del curso de Playwright de The Free Range Tester
 */
(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegación en www.freerangetesters.com', () => {
        test.skip('Los links principales redirigen correctamente', async ({ page }) => {
            await test.step('Estando yo en la web principal www.freerangetesters.com', async () => {
                page.goto('https://www.freerangetesters.com/');
            })

            await test.step('Cuando hago click en "Cursos"', async () => {
                page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();
                await page.waitForURL('**/cursos');
            })

            await test.step('Soy redirigido a la sub página "Cursos"', async () => {
                await expect(page).toHaveTitle('Cursos');
            })
        })
    })
})();