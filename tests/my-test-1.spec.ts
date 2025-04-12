import { expect, test } from '@playwright/test';

/**
 * @description Ejemplo de la sección 3 del curso de Playwright de The Free Range Tester
 * pero siguiendo la documentación oficial de Playwright Test para la estructura de los tests.
 * @see https://playwright.dev/docs/writing-tests
 */
test.describe('Navegación en www.freerangetesters.com', () => {
    test('Los links principales redirigen correctamente', async ({ page }) => {
        await test.step('Estando yo en la web principal www.freerangetesters.com', async () => {
            await page.goto('https://www.freerangetesters.com/');
        });

        await test.step('Cuando hago click en "Cursos"', async () => {
            await page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();
        });

        await test.step('Soy redirigido a la sección de título "Cursos"', async () => {
            await page.waitForURL('**/cursos');
            await expect(page).toHaveTitle('Cursos');
        });
    });
});