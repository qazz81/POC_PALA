const HelpNavigation = require("../helpers/helpNavigation");
const helpNavigation = new HelpNavigation();
const AccountBalancePage = require("../pageObjects/accountBalancePage");
const accountBalancePage = new AccountBalancePage();
const lobbyPage = require("../pageobjects/lobbyPage");
const location = require("../data/location.json");
const popUpPage = require("../pageObjects/popUpPage");
const userMenuPage = require("../pageObjects/userMenuPage");

describe('User menu: show balance.', () => {
    it(' Showed balance on lobby page',  async () => {
        let ActualPageData = accountBalancePage.actualPageData();
        let ExpectedPageData = accountBalancePage.expectedPageData;
        await helpNavigation.navigateToLobbyUserLoggedIn({location: location.StageNewJersey});
        await expect(await lobbyPage.accountBalanceBtn).toBeExisting;
        await lobbyPage.tapAccountBalanceBtn();
        await accountBalancePage.addFundsBtn.waitForClickable();
        await browser.saveScreenshot("AccountBalance.png");
        await expect(await ActualPageData.getAccountBalanceTitleText()).toEqual(ExpectedPageData.accountBalanceTitle);
        await expect(await ActualPageData.getAccountBalanceSummText()).toEqual(ExpectedPageData.accountBalanceSumm(334.47));
        await expect(await ActualPageData.getCashText()).toEqual(ExpectedPageData.cashText),
        await expect(await ActualPageData.getCashNumber()).toEqual(ExpectedPageData.cashNumber(334.47)); 
        await expect(await ActualPageData.getBonusText()).toEqual(ExpectedPageData.bonusText);
        await expect(await ActualPageData.getBonusNumber()).toEqual(ExpectedPageData.bonusNumber(0));
        await expect(await ActualPageData.getRestrictedCashText()).toEqual(ExpectedPageData.restrictedCashText);
        await expect(await ActualPageData.getRestrictedCashNumber()).toEqual(ExpectedPageData.restrictedCashNumber(0,0,0));
        await expect(await ActualPageData.getReservedCashText()).toEqual(ExpectedPageData.reservedCashText);
        await expect(await ActualPageData.getReservedCashNumber()).toEqual(ExpectedPageData.reservedCashNumber(0));
        await expect(await ActualPageData.getCashIsUnrestText()).toEqual(ExpectedPageData.cashIsUnrestText);
        await expect(await ActualPageData.getBonusIsTheTextText()).toEqual(ExpectedPageData.bonusIsTheText);
        await expect(await ActualPageData.getRestrictedCashIsText()).toEqual(ExpectedPageData.restrictedCashIsText);
        await expect(await ActualPageData.isAddFundsBtn()).toEqual(ExpectedPageData.isAddFundsBtn);
        await expect(await ActualPageData.isBonusDetailsBtn()).toEqual(ExpectedPageData.isBonusDetailsBtn);
    }),

    it(' Show balance on User menu',  async () => {
        await popUpPage.tapCloseLogOutPopUpBtn();
        await lobbyPage.tapUserMenuLobbyBtn();
        await browser.saveScreenshot("userMenu.png");
        await userMenuPage.tapInformationSecurityBtn();
        await userMenuPage.tapGameHistoryBtn();
        await userMenuPage.tapGameHistoryBtn();

        await userMenuPage.tapShowBalanceBtn();
        await userMenuPage.tapInfoBtn();
        await expect(await accountBalancePage.accountBalanceSumm).toBeExisting();
        await browser.saveScreenshot(`AccountBalanceUserMenu.png`);
        await popUpPage.tapCloseLogOutPopUpBtn();
        await lobbyPage.tapUserMenuLobbyBtn();

        // await userMenuPage.tapInformationSecurityBtn();
        // await userMenuPage.tapAccountInformationBtnBtn();
        // await popUpPage.tapBackPopUpBtn();

        await userMenuPage.tapLogoutBtn();
        await browser.saveScreenshot("logoutpo.png");
        await popUpPage.isLogOutPopUp();
        await popUpPage.tapCloseLogOutPopUpBtn();
        await expect(await lobbyPage.logInLobbyBtn).toBeExisting();
        await browser.saveScreenshot(`screenshot_LobbyLogOUT2.png`);

    })
})