
const locationPage = require("../pageObjects/locationPage");
const popUpPage = require("../pageObjects/popUpPage");
const lobbyPage = require('../pageObjects/lobbyPage');
const loginPage = require('../pageObjects/loginPage');
const mfaPage = require("../pageObjects/mfaPage");
const userMenuPage = require("../pageObjects/userMenuPage");
const location = require("../data/location.json");
const locationURL = location.StageNewJersey.URL;
const locationWhere = location.StageNewJersey.locationWhere;
const userCredentials = require("../data/userCredentials.json");
const userCredential = userCredentials.userCredentialANT1;
const smsCode = 111111;// need move out to the user file
const vendorPala = "pala";// need move out to the user file
const gameGirlsBestFriends = (browser.requestedCapabilities['custom:caps']) ?
    "internal/slot-girlsbestfriends.jpg" : 
        browser.isAndroid ? 
            "slot-girlsbestfriends" :
            'A Girls Best Friends';
const lookingGame = "pala-game-id";


describe('Happy path. Gambling in Stardust application: Login - play - logout', () => {
    it(' Lobby, log out page',  async () => {
        if (browser.requestedCapabilities['custom:caps']) {
            await browser.url(locationURL);
        } else if (browser.isAndroid) {
            await browser.pause(10*1000);  // Wait for Allow notification pop up, need change to waitForDisplayed.
            if (await popUpPage.allowBtn.isDisplayed()){ // Allow notification
                await popUpPage.tapAllowBtn();
            }
            if (await popUpPage.okBtn.isDisplayed()){ // Player location check
                await popUpPage.tapOkBtn();
            }
            if (await popUpPage.permissionSystemAllowBtn.isDisplayed()){ // Access to device location
                await popUpPage.tapPermissionSystemAllowBtn();
            }
            await locationPage.isLocationPagePresent();
            if (locationWhere == "PENNSYLVANIA") {
                await locationPage.tapPennsylvaniaBtn();
            } else {
                await locationPage.tapNewJerseyBtn();
            }
        }
        //Lobby page, user logged out
        await lobbyPage.isLobbyPageUserLogOut();
        await expect(lobbyPage.locationLobby).toHaveText(locationWhere);
        await browser.saveScreenshot(`screenshot_LobbyLogOutStart.png`); // set up path for report folder
    }),

    it('Login page',  async () => {
        // Login
        await lobbyPage.tapLoginLobbyBtn();
        await loginPage.isLogInPagePresent();
        await expect(loginPage.inputUsername).toBeExisting();
        await browser.saveScreenshot(`screenshot_LogIn.png`); // set up path for report folder
    }),

    it('MFA page',  async () => {        
        await loginPage.login(userCredential);
        // MFA
        await mfaPage.isMFAPagePresent();
        await expect(mfaPage.mfaTitle).toBeExisting();     
        await browser.saveScreenshot(`screenshot_MFA.png`); // set up path for report folder
    }),

    it('Lobby, log in page',  async () => {
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
        await lobbyPage.isLobbyPageUserLogIn();
        await browser.saveScreenshot(`screenshot_LobbyLogIN.png`); // set up path for report folder
    }),

    it('Lobby, start game',  async () => {        
        // Looking for Pala/Girls best friends game
        await lobbyPage.findGame(vendorPala);
        await browser.pause(5000); // wait for display after filtering
        await lobbyPage.tapOnFoundGame(gameGirlsBestFriends);
        //Check the game
        await lobbyPage.waitIsGamePalaInProgress(); 
        await expect(await lobbyPage.gamePalaIDInProgress).toExist();
        // await browser.debug();
        await browser.saveScreenshot(`screenshot_GameStarted.png`); // set up path for report folder      
    }),

    it('Log out',  async () => {
        // Close the game
        await lobbyPage.closeGame();
        // Log out
        await lobbyPage.tapUserMenuLobbyBtn();
        await browser.pause(2000); // need change to waitForDisplayed       
        await userMenuPage.tapLogoutBtn();
        // if (browser.requestedCapabilities['custom:caps']=== 'web' || browser.isIOS){
        //     await userMenuPage.tapLogoutBtn();
        // } else {
        //     await driver.touchAction({  // Tap logout button, Humburger menu and User menu does not found in Appium
        //         action: 'tap', x: 157, y: 1960 // Samsung A54
        //   });
        // }
        await popUpPage.tapCloseLogOutPopUpBtn();
        await expect(await lobbyPage.logInLobbyBtn).toBeExisting();
        await browser.saveScreenshot(`screenshot_LobbyLogOUT.png`); // set up path for report folder
    })
})