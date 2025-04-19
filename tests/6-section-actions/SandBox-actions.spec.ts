import { test } from "../../pages/sandbox/sandbox-fixture";

test.beforeEach(async ({ sandboxPage }) => {
    await test.step('Navega hasta el sandbox de The Free Range Testers', async () => {
        await sandboxPage.goTo();
    });
});

/**
 * Another examples of clicks actions:
 * https://playwright.dev/docs/api/class-locator#locator-click
 * .click() - Clicks the element.
 * .dblclick() - Double clicks the element.
 * .click({ button: 'right' }) - Right clicks the element.
 * .click({ modifiers: ['Shift'] }) - Holds down Shift while clicking the element.
 * .click({ force: true }) - Clicks the element even if it is not visible.
 * .hover() - Hovers over the element.
 */
test.describe('Acciones del Automation SandBox', () => {
    test('Click en el botón con ID dinámico', async ({ sandboxPage }) => {
        await test.step('Hace click en el botón con ID dinámico', async () => {
            await sandboxPage.clickDynamicButton();
        });
    });

    test('Lleno un campo de texto en Automation SandBox', async ({ sandboxPage }) => {
        await sandboxPage.fillInputText('Hola mundo con Playwright!');
    });

    test('Selecciono un checkbox', async ({ sandboxPage }) => {
        await sandboxPage.checkPastaCheckbox();
    });

    test('Selecciono un radio button para No', async ({ sandboxPage }) => {
        await sandboxPage.checkNoRadioButton();
    });

    test('Selecciono un item del dropdown "Deportes"', async ({ sandboxPage }) => {
        await sandboxPage.selectSports('Fútbol');
    });

    test('Selecciono un item del dropdown de "Días de la semana"', async ({ sandboxPage }) => {
        await sandboxPage.selectDayOfWeek('Martes');
    });

    test.skip('Sube varios archivos', async ({ page }) => {
        await page.getByLabel('Upload files').setInputFiles([
            'file1.txt',
            'file2.txt',
        ]);
    });

    test.skip('Arrastra y suelta un archivo', async ({ page }) => {
        await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
    });
})