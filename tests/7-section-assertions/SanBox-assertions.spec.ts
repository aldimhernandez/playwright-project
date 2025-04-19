import { expect, test } from '@playwright/test';

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
            await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible();
            //* Otros métodos para interactuar con el botón:
            //* await dynamicButtonID.click({force: true});
            //* await dynamicButtonID.dblclick();
            //* await dynamicButtonID.click({ button: 'right' });
            //* await dynamicButtonID.click({modifiers: ['Shift']});
            //* await dynamicButtonID.hover();
        });
    });

    test('Lleno un campo de texto en Automation SandBox', async ({ page }) => {
        await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toBeEditable();
        await page.getByPlaceholder('Ingresá texto').fill('Hola mundo con Playwright');
        await expect(page.getByPlaceholder('Ingresá texto')).toHaveValue('Hola mundo con Playwright');
    });

    test('Selecciono un checkbox', async ({ page }) => {
        await page.getByLabel('Pasta 🍝').check();
        await expect(page.getByLabel('Pasta 🍝')).toBeChecked();
    });

    test('Selecciono un checkbox y lo desmarco', async ({ page }) => {
        await page.getByLabel('Pasta 🍝').check();
        await expect(page.getByLabel('Pasta 🍝'), 'El checkbox no estaba seleccionado').toBeChecked();
        await page.getByLabel('Pasta 🍝').uncheck();
        await expect(page.getByLabel('Pasta 🍝'), 'El checkbox estaba seleccionado').not.toBeChecked();
    });

    test('Selecciono un radio button para No', async ({ page }) => {
        await page.getByLabel('No').check();
        await expect(page.getByLabel('No'), 'El radio button no fue seleccionado').toBeChecked();
    });

    test('Selecciono un item de un falso dropdown de "Deportes"', async ({ page }) => {
        await test.step('Valido que todas las opciones estén disponibles', async () => {
            /**
             * * No funciona debido a que el elemento <select> no tiene el atributo 'multiple'.
                const dropdownSelector = page.locator('id=formBasicSelect');
                await dropdownSelector.selectOption(['Fútbol', 'Tennis']);
                await expect(dropdownSelector).toHaveValues([/Fútbol/, /Tennis/]);
             */
            const sportsOptionsList = ['Fútbol', 'Tennis', 'Basketball', 'Rugby'];
            for (const sport of sportsOptionsList) {
                const sportOption = await page.$(`select#formBasicSelect > option:is(:text("${sport}"))`),
                    messageSuccess = `La opción "${sport}" se encontró en el dropdown.`,
                    messageError = `La opción "${sport}" no se encontró en el dropdown.`;

                sportOption ? console.info(messageSuccess) : console.error(messageError);
            }
        });
        await test.step('Selecciono la opción "Fútbol"', async () => {
            await page.getByLabel('Dropdown').selectOption('Fútbol');
        });
    });

    test('Selecciono un item del dropdown de "Días de la semana"', async ({ page }) => {
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Martes' }).click();
    });

    test('Valido la columna "Nombres" de la tabla estática', async ({ page }) => {
        const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
        const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];

        expect(valoresColumnaNombres).toEqual(nombresEsperados);
        await test.info().attach('screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        })
    });

    test('Valido la columna "Nombres" de la tabla dinámica', async ({ page }) => {
        const valoresTabla = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
        console.log(valoresTabla);

        await page.reload();

        const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
        console.log(valoresPostReload);

        expect(valoresTabla).not.toEqual(valoresPostReload);
    });

    test('Validando un falso pop up', async ({ page }) => {
        await test.step('Hace click en el botón para abrir el pop up', async () => {
            await page.getByRole('button', { name: 'Mostrar popup' }).click();
        });

        await test.step('Valida un elemento dentro del popup', async () => {
            await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toBeVisible();
            await page.getByRole('button', { name: 'Cerrar' }).click();
        });
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

test.describe('Soft Assertions probando el Automation SandBox', () => {
    test('Valido que los elementos de texto de los checkbox estén correctos', async ({ page }) => {
        await expect.soft(page.getByLabel('Pizza 🍕'), 'No se encontró el elemento Pizza').toBeVisible();
        await expect.soft(page.getByLabel('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa').toBeVisible();
        await expect.soft(page.getByLabel('Pasta 🍝'), 'No se encontró el elemento Pasta').toBeVisible();
        await expect.soft(page.getByLabel('Gelato 🍧'), 'No se encontró el elemento Gelato').toBeVisible();
        await expect.soft(page.getByLabel('Torta 🍰'), 'No se encontró el elemento Torta').toBeVisible();
    });
});
