import {expect} from '@playwright/test';
import {test} from '../src/fixtures/fixture';
import {buildRandomEmail, buildRandomPassword} from '../src/utils/rundomCreadentioalBuilder';

const expectedMessage: string = 'Login leider nicht erfolgreich.';

test.beforeEach(async ({homePage}) => {
    await homePage.goto();
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
