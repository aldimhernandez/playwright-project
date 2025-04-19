import type { Page, Locator } from '@playwright/test';

/**
 * @see: https://playwright.dev/docs/pom
 * @see: https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */
export class SandboxPage {
    readonly url: string = 'https://thefreerangetester.github.io/sandbox-automation-testing/';
    readonly dynamicButton: Locator;
    readonly inputText: Locator;
    readonly pastaCheckbox: Locator;
    readonly noRadioButton: Locator;
    readonly dropdownLabel: Locator;
    readonly dayOfWeekButton: Locator;

    constructor(public readonly page: Page) {
        this.dynamicButton = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
        this.inputText = page.getByPlaceholder('Ingresá texto');
        this.pastaCheckbox = page.getByLabel('Pasta 🍝');
        this.noRadioButton = page.getByLabel('No');
        this.dropdownLabel = page.getByLabel('Dropdown');
        this.dayOfWeekButton = page.getByRole('button', { name: 'Día de la semana' });
    }

    async goTo() {
        await this.page.goto(this.url);
    }

    async clickDynamicButton() {
        await this.dynamicButton.click();
    }

    async fillInputText(value: string) {
        await this.inputText.fill(value);
    }

    async checkPastaCheckbox() {
        await this.pastaCheckbox.check();
    }

    async checkNoRadioButton() {
        await this.noRadioButton.check();
    }

    async selectSports(value: string) {
        await this.dropdownLabel.selectOption(value);
    }

    async clickDayOfWeekButton() {
        await this.dayOfWeekButton.click();
    }

    async selectDayOfWeek(value: string) {
        await this.dayOfWeekButton.click();
        await this.page.getByRole('link', { name: value }).click();
    }
}
