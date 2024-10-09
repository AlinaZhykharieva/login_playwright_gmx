import {Locator, Page} from '@playwright/test';

export class LogoutLoungePage {
    readonly url = '/logoutlounge/?status=login-failed';
    readonly page: Page;
    readonly errorNotification: Locator;
    readonly returnToLoginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.errorNotification = page.locator('[data-text]');
        this.returnToLoginLink = page.locator('a[data-component="button"][data-importance="accent"][href="https://www.gmx.net/"]');
    }

    async returnToLoginClick() {
        await this.returnToLoginLink.click();
    }

    async goto() {
        await this.page.goto(this.url)
    }

}
