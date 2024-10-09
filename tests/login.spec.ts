import {expect} from '@playwright/test';
import {test} from '../src/fixtures/fixture';
import {buildRandomEmail, buildRandomPassword} from '../src/utils/rundomCreadentioalBuilder';

const expectedMessage: string = 'Login leider nicht erfolgreich.';
const manageAdvertisingUrl = '**/js.ui-portal.de/netid/consensu/v3/latest/*';

test.beforeEach(async ({homePage, context}) => {
    // await context.route(manageAdvertisingUrl, route => route.abort());
    await homePage.start();
});

test('Login with empty data', async ({homePage, logoutLoungePage}) => {
    await homePage.loginClick();
    await expect(logoutLoungePage.errorNotification).toContainText(expectedMessage);
});

test('Login with random password and email', async ({homePage, logoutLoungePage}) => {
    await homePage.passwordInput.fill(buildRandomPassword());
    await homePage.emailInput.fill(buildRandomEmail());
    await homePage.loginClick();
    await expect(logoutLoungePage.errorNotification).toContainText(expectedMessage);
});

test('Return to Home page with login functionality', async ({homePage, logoutLoungePage}) => {
    await logoutLoungePage.goto();
    await expect(logoutLoungePage.errorNotification).toContainText(expectedMessage);
    await logoutLoungePage.returnToLoginClick();
    await expect(homePage.loginButton).toBeVisible();
});

test('Close ADV', async ({page, homePage}) => {
    await page.goto('/consent-management/');
    await page.waitForSelector('iframe[name="landingpage"]');
    const frame = page.locator('iframe[name="landingpage"]').contentFrame().locator('iframe').contentFrame().getByRole('button', {name: 'Akzeptieren und weiter'})
    await frame.click();
    await expect(homePage.loginButton).toBeVisible();
});


