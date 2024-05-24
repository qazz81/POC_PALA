
describe('My Login application', () => {
    it('should login with valid credentials',  async () => {
        const { pid } = require('node:process');
        console.log(`This process is pid ${pid}`);
        // pop-ups on startup, location selection
        const popUpOk = $('//android.widget.Button[@text="Ok"]');
        const permissionAllowBtn = $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
        const pennsylvaniaStateBtn = $('//android.view.View[@text="Pennsylvania"]');
        // Lobby page
        const hamburgerMenuBtn = $('//android.widget.Button[@text="menu"]');
        const locationLobby = $('//android.widget.TextView[@text="PENNSYLVANIA"]');
        var locationLobbyText;
        const logInBtn = $('//android.widget.Button[@text="Log in"]');
        // Log in page
        const inputUsername = $('//android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.ListView/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText'); // ?
        const inputPassword = $('//android.widget.EditText[@text="Enter password"]'); // ?
        const logInPopUpBtn = $('(//android.widget.Button[@text="Log in"])[2]');
        var username = "ant1@yopmail.com"; // need move out to the user file
        var password = "Qa!123456";

        // Navigate to User Logged out Lobyy 
        await popUpOk.click();
        await permissionAllowBtn.click();
        await pennsylvaniaStateBtn.click();
        // lobby page
        await expect(hamburgerMenuBtn).toBeExisting();
        locationLobbyText = await locationLobby.getText();
        await browser.pause(5000); // need change to waitForDisplayed
        expect(locationLobbyText).toHaveText('PENNSYLVANIA');
        await logInBtn.click();

        // Log in page
        await inputUsername.setValue(username);
        await inputPassword.setValue(password);
        await logInPopUpBtn.click();
        // MFA
        const mfaPopUp = $('//android.view.View[@text="Multi-factor authentication"]');
        await expect(mfaPopUp).toBeExisting();
        const inputSMSCode = $('//android.widget.ListView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText');
        await inputSMSCode.setValue(111111);// change grab from data file
        const verifyBtn = $('//android.widget.Button[@text="Verify"]');
        await verifyBtn.click();
        await browser.pause(10000); // wait for Geolocation check
        // User logged in Lobby
        const userMenuBtn = $('(//android.widget.Button[@text="menu"])[2]');
        await expect(userMenuBtn).toBeExisting();
        // Looking for Pala/Girls best friends game
        const findGameUserLogin = $('//android.widget.EditText');
        await findGameUserLogin.setValue("pala");
        await browser.pause(5000);  // Wait for filtering, need change to waitForDisplayed
        const girlsFriendsGameBTN = $('//android.widget.Image[@text="slot-girlsbestfriends"]');
        await girlsFriendsGameBTN.click();
        // Wait for starting game
        const closeGameBTN = $('//android.widget.Button[@text="close"]');
        await closeGameBTN.waitForDisplayed({ timeout: 30000 }) // Wait for downloading game
        await expect(closeGameBTN).toBeExisting();
        const girlsFriendsGameNumberLoc = $('//android.view.View[@resource-id="pala-game-id"]');
        var girlsFriendsGameNumber = await girlsFriendsGameNumberLoc.getText();
        console.log( `Runned game number is ${girlsFriendsGameNumber}`);
        await expect(girlsFriendsGameNumberLoc).toBeExisting();
        // Close the game
        await closeGameBTN.click();
        // Log out
        await expect(userMenuBtn).toBeExisting();
        await userMenuBtn.click();
        const logOutBtn = $('//android.view.View[@text="Log out"]');
        await logOutBtn.click();

        const logOutPopUpText = $('//android.view.View[@text="Logout"]');
        await expect(logOutPopUpText).toBeExisting();
        const closelogOutPopUpBtn = $('//android.widget.Button[@text="close"]');
        await closelogOutPopUpBtn.click();
        
        await logInBtn.waitForDisplayed();
        await expect(logInBtn).toBeExisting();

        console.log('Current pid: ' + pid);
        console.log(`The browser.commandList is ${browser.commandList}`);
        console.log(`The running platform Android is ${browser.isAndroid}`);
        console.log(browser.isAndroid);
        console.log(`The Session ID is ${browser.sessionId}`);
        console.log(`The browsingContextLocateNodes is ${toString(browser.browsingContextLocateNodes())}`);




        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})