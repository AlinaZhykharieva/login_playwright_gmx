import {Locator, Page} from '@playwright/test';
const manageAdvertisingUrl = ' **/js.ui-portal.de/netid/consensu/v3/latest/*';

export class HomePage {
    readonly url = '/'
    readonly page: Page;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('button', {hasText: 'Login'});
        this.emailInput = page.locator('#mailInput');
        this.passwordInput = page.locator('#pwInput');
    }

    async loginClick() {
        await this.loginButton.click();
    }

    async start() {
        await this.page.goto(this.url);
        // await this.page.reload();
    }
}
