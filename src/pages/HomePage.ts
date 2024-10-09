import {Locator, Page} from '@playwright/test';
import {LandingPageIFrame} from "./IFrames";

export class HomePage {
    readonly url = '/'
    readonly page: Page;
    readonly landingIFrame: LandingPageIFrame;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.landingIFrame = new LandingPageIFrame(page);
        this.loginButton = page.locator('button', {hasText: 'Login'});
        this.emailInput = page.locator('#mailInput');
        this.passwordInput = page.locator('#pwInput');
    }

    async loginClick() {
        await this.loginButton.click();
    }

    async goto() {
        await this.page.goto(this.url);
        await this.landingIFrame.acceptAndCloseIFrame();
    }
}
