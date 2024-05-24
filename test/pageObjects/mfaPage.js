// const { $ } = require('@wdio/globals')
const BasePage = require('./basePage');

/**
 * MFA page containing specific selectors and methods for a MFA page
 */
class MFAPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get mfaTitle () {
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//*/app-sms-login/custom-navbar/ion-header/ion-toolbar/ion-title/div') : 
            browser.isAndroid ? 
                $('//*[@text="Multi-factor authentication"]') :
                $('id:Multi-factor authentication');
    }
    get smsCodeField () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('//*/app-sms-login/ion-content/ion-grid/app-validate-pin/ion-grid/form/ion-row[2]/ion-col/ion-list/div/ion-item/div[1]/ion-input/input') : 
            browser.isAndroid ? 
                $('//android.widget.ListView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText') :
                $('//XCUIElementTypeTextField[@name="Enter code:"]');
    }
    get verifyBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('//*/app-sms-login/ion-content/ion-grid/app-validate-pin/ion-grid/form/ion-row[3]/ion-col/ion-button') : 
            browser.isAndroid ? 
                $('//android.widget.Button') :
                $('id:Verify');
    }

    async isMFAPagePresent() {
        await expect(this.mfaTitle).toBeExisting();
    }
    async inputSMSCode(value) {
        await this.smsCodeField.setValue(value);
    }
    async tapVerifyBtn() {
        await this.verifyBtn.click();
    }
    async tapMFATitleText() {
        await this.mfaTitle.click();
    }
}

module.exports = new MFAPage();
