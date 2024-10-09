import {test as base} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LogoutLoungePage} from '../pages/LogoutLoungePage';

type Pages = {
    homePage: HomePage;
    logoutLoungePage: LogoutLoungePage;
};

export const test = base.extend<Pages>({
    logoutLoungePage: async ({page}, use) => {
        await use(new LogoutLoungePage(page));
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
});
