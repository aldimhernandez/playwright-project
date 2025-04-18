import { test } from '@playwright/test';

test.describe('Acciones del Automation SandBox', () => {
    test('Click en el botón con ID dinámico', async ({ page }) => {
        await test.step('Navega hasta el sandbox de The Free Range Testers', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

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
})