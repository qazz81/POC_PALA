const BasePage = require('./basePage');

/**
 * Login page containing specific selectors and methods for a Login page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return (browser.requestedCapabilities['browserName']) ?
            $('[name="ion-input-1"]') :
                browser.isAndroid ? 
                    $('//android.app.Dialog/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.ListView/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText') :
                    $('//XCUIElementTypeTextField[@name="Email:"]');
    }

    get inputPassword () {
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('[name="ion-input-2"]') : 
                browser.isAndroid ? 
                    $('//android.app.Dialog/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.ListView/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText') :
                    $('XCUIElementTypeSecureTextField');
    }

    get LoginBtn () {
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//*/app-login/ion-content/ion-grid/form/ion-row[1]/ion-col/ion-button[1]') :
                browser.isAndroid ? 
                    $('(//android.widget.Button[@text="Log in"])[2]') :
                    $('(//XCUIElementTypeButton[@name="Log in"])[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login ({userName, userPassword}) {
        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(userPassword);
        await this.LoginBtn.click();
    }

    async tapLoginBtn () {
        await this.LoginBtn.click();
    }

    async isLogInPagePresent() {
        return await expect(this.inputUsername).toBeExisting();
    }
}

module.exports = new LoginPage();
