import {Locator, Page, Selectors} from '@playwright/test';

export class LandingPageIFrame {
    readonly iframeName: string;
    readonly acceptButtonName: string;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.iframeName = 'iframe[name="landingpage"]';
        this.acceptButtonName = 'Akzeptieren und weiter';
    }

    async acceptAndCloseIFrame() {
        await this.page.waitForSelector(this.iframeName);
        const acceptButton = this.page.locator(this.iframeName).contentFrame().locator('iframe')
            .contentFrame().getByRole('button', {name: this.acceptButtonName});
        await acceptButton.click();
    }

}
