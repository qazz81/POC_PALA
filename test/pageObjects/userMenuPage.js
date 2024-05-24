const BasePage = require('./basePage');

// const changeContext = function(value,{kind, name}) {
//     return function(target){
//         if (kind === "function") {
//             return 
//                 if (isHybride === true){
//                 driver.switchContext('WEBVIEW_com.boydgaming.stardustcasino');
//                 target();
//                 driver.switchContext('NATIVE_APP');
//             } else { 
//                 target();
//             }
//         }
//     }
// }
// const changeContext = function(func, isHybride) {
//     return function(func){
//         const result;
//         if (isHybride === "function") {
//             return 
//                 if (isHybride === true){
//                 driver.switchContext('WEBVIEW_com.boydgaming.stardustcasino');
//                 result = func(...ards);
//                 driver.switchContext('NATIVE_APP');
//             } else { 
//                 result = func(...ards);
//             }
//         }
//         return result;
//     }
// }
// const tapLogoutBtnDecorated = withMobileContent(tapLogoutBtn);

/**
 * User Menu page for Log in and log out user
 */
class UserMenuPage  extends BasePage {

    get showBalanceBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/SHOW BALANCE') : 
                browser.isAndroid ? 
                    $('//b') :
                    $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]');
    }
    
    get hideBalanceBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/HIDE BALANCE') : 
                browser.isAndroid ? 
                    $('//b') :
                    $('TBD');
    }

    get infoBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/Info') : 
                browser.isAndroid ? 
                    $('//ion-button') :
                    $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]');
    }
    
    get informationSecurityBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/Information & security') : 
                browser.isAndroid ? 
                    $('ion-item=Information & security') :
                    $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]');
    }
    get accountInformationBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/AccountInformation') : 
                browser.isAndroid ? 
                    $('ion-item=AccountInformation') :
                    $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeStaticText[1]');
    }

    get gameHistoryBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/Game history') : 
                browser.isAndroid ? 
                    $('ion-item=Game history') :
                    $('TBD');
    }

    get logOutBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('aria/Log out') : 
                browser.isAndroid ? 
                    $('ion-item=Log out') :
                    $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther[8]/XCUIElementTypeStaticText[1]');
    }
    
    async tapButton(btn) {
        if (browser.isAndroid) {
            await driver.switchContext('WEBVIEW_com.boydgaming.stardustcasino');
            await browser.pause(2000);
            await btn.click();
            await driver.switchContext('NATIVE_APP');
            await browser.pause(2000);
        } else {
            await btn.click();
        }
    }
    async getProperty(func) {
        if (browser.isMobile) {
            await driver.switchContext('WEBVIEW_com.boydgaming.stardustcasino');
            await browser.pause(2000);
            await func();
            await driver.switchContext('NATIVE_APP');
            await browser.pause(2000);
        } else {
            await func();
        }
    }

    async tapShowBalanceBtn () {
        await this.tapButton(this.showBalanceBtn);
    }
    async tapInfoBtn () {
        await this.tapButton(this.infoBtn);
    }
    async tapHideBalanceBtn () {
        await this.tapButton(this.hideBalanceBtn);
    }
    async tapInformationSecurityBtn () {
        await this.tapButton(this.informationSecurityBtn);
    }
    async tapAccountInformationBtnBtn () {
        await this.tapButton(this.accountInformationBtn);
    }
    async tapGameHistoryBtn () {
        await this.tapButton(this.gameHistoryBtn);
    }
    async tapLogoutBtn () {
        await this.tapButton(this.logOutBtn);
    }

    /*
    * Geting data from User menu with parameter
    * #block - text, which block need get the text from: 
    * UserMenu - User menu with closed Show Balance, 
    * HideBalance - from this element only,
    * InformationSecurity - from opened Information & Security sub menu
    * TBD
    */
    actualPageData(block){
        switch (block){
            case "UserMenu":
                return {
                    getShowBalanceText: async () => await this.getProperty(this.showBalanceBtn.getText()),
                    getInformationSecurityText: async () => await this.getProperty(this.informationSecurityBtn.getText()),
                    getInformationSecurityText: async () => await this.getProperty(this.informationSecurityBtn.getText()),
                    getInformationSecurityText: async () => await this.getProperty(this.informationSecurityBtn.getText())
                };
            case "HideBalance":
                return {
                    getHideBalanceText: async () => await this.getProperty(this.hideBalanceBtn.getText()),
                };
            case "InformationSecurity":
                return {
                    getAccountInformationText: async () => await this.getProperty(this.accountInformationBtn.getText()),
                    //TBD
                };
            }
                
    }
    get expectedPageData(){
        return {
            informationSecurity : "Information & Security",
            accountInformation : "Account information",
            changePassword : "Change password",
            personalInformation : "Personal information",
            securityQuestions : "Security questions",
            resendPIN : "ResendPIN",
            manageMFA : "Manage MFA",
            manageNotifications : "Manage notifications",
            settings : "Settings ",
            uploadADocument : "Upload a document",
            taxReport : "Tax report"
        }
    }
}

module.exports = new UserMenuPage