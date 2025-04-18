import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await test.step('Navega hasta el sandbox de The Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    });
});

test.describe('Acciones del Automation SandBox', () => {
    test('Click en el botón con ID dinámico', async ({ page }) => {
        await test.step('Hace click en el botón con ID dinámico', async () => {
            const dynamicButtonID = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
            await dynamicButtonID.click();
            //* Otros métodos para interactuar con el botón:
            //* await dynamicButtonID.click({force: true});
            //* await dynamicButtonID.dblclick();
            //* await dynamicButtonID.click({ button: 'right' });
            //* await dynamicButtonID.click({modifiers: ['Shift']});
            //* await dynamicButtonID.hover();
        });
    });

    test('Lleno un campo de texto en Automation SandBox', async ({ page }) => {
        await page.getByPlaceholder('Ingresá texto').fill('Hola mundo con Playwright');
    });

    test('Selecciono un checkbox', async ({ page }) => {
        await page.getByLabel('Pasta 🍝').check();
        await page.getByLabel('Pasta 🍝').uncheck();
        await page.getByLabel('Pasta 🍝').check();
    });

    test('Selecciono un radio button para No', async ({ page }) => {
        await page.getByLabel('No').check();
    });

    test('Selecciono un item del dropdown "Deportes"', async ({ page }) => {
        await page.getByLabel('Dropdown').selectOption('Fútbol');
    });

    test('Selecciono un item del dropdown de "Días de la semana"', async ({ page }) => {
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Martes' }).click();
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