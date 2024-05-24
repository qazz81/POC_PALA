const userCredentials = require("../data/userCredentials.json");
const location = require("../data/location.json");

const locationPage = require("../pageObjects/locationPage");
const popUpPage = require("../pageObjects/popUpPage");
const lobbyPage = require('../pageObjects/lobbyPage');
const loginPage = require('../pageObjects/loginPage');
const mfaPage = require("../pageObjects/mfaPage");
const userMenuPage = require("../pageObjects/userMenuPage");
const smsCode = 111111;

class HelpNavigation {
async navigateToLobbyUserLoggedIn({location = location.StagePen, userCredential = userCredentials.userCredentialANT1} ={}) {
        if (browser.requestedCapabilities['custom:caps']){
            await browser.url(location.URL)
        } else if (browser.isAndroid) {
            await popUpPage.allowBtn.waitForDisplayed() // Wait for Notification pop up
            await popUpPage.tapAllowBtn();
            if (await popUpPage.okBtn.isDisplayed()){ // Player location check
                await popUpPage.tapOkBtn();
            }
            if (await popUpPage.permissionSystemAllowBtn.isDisplayed()){ // Access to device location
                await popUpPage.tapPermissionSystemAllowBtn();
            }
            await locationPage.isLocationPagePresent();
            switch (location.locationWhere){
                case 'PENNSYLVANIA':
                    await locationPage.tapPennsylvaniaBtn();
                    await console.log("selected PENNSYLVANIA");
                    break;
                case 'NEW JERSEY':
                    await locationPage.tapNewJerseyBtn();
                    await console.log("selected NEW JERSEY");
                    break;
                case 'ONTARIO':
                    await locationPage.tapOntarioBtn();
                    await console.log("selected ONTARIO");
                    break;
                default :
            }
            
        }
        // Login
        await lobbyPage.tapLoginLobbyBtn();
        await loginPage.login(userCredential);
        // MFA
        await browser.pause(2000);  // Wait due to bad locator (the same xpath on bothe pages)
        await mfaPage.inputSMSCode(smsCode);
        if (!browser.requestedCapabilities['custom:caps']){
            await mfaPage.tapMFATitleText();
        } else {
            await mfaPage.tapVerifyBtn();
        }
        //Lobby page, user logged in
        await browser.pause(5000); // wait for Geolocation check
        while (await popUpPage.lastLoginPopupCloseBTN.isDisplayed()) {
            await popUpPage.tapCloseLastLoginPopupBtn();
        };
        await expect(lobbyPage.userMenuBtn).toBeExisting();
    }
}

module.exports = HelpNavigation;