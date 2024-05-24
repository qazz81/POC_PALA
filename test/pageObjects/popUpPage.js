const BasePage = require('./basePage');

/**
* Pop up page for Log in and log out user
*/

class PopUpPage extends BasePage {

    // system permission location
    get permissionSystemAllowBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'): $('TBD');
    }
    get permissionSystemDenyBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_foreground_only_button"]') : $('TBD');
    }

    // pop up button Ok and Cancel
    get okBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@text="Ok"]'): $('TBD');
    }
    get cancelBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@text="Cancel"]'): $('TBD');
    }
    // pop up button Allow and Don't allow Notification
    get allowBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'): $('TBD');
    }
    get dontAllowBtn(){
        return browser.isAndroid ? $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]'): $('TBD');
    }

    // App permission location pop up text
    get permissionLocationAppText1(){
        return browser.isAndroid ? $('//android.view.View[@text="Player location check permission"]'): $('TBD');
    }
    get permissionLocationAppText2(){
        return browser.isAndroid ? $(`//android.view.View[@text="Allow Stardust to access the device's location in background."]`): $('TBD');
    }
    get permissionLocationAppText3(){
        return browser.isAndroid ? $('//android.view.View[@text="For Stardust to comply with state regulations, this app uses your location in background to verify that you are in the allowed location in order to place wagers."]'): $('TBD');
    }

    get backPopUpBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-header/ion-toolbar/ion-button[2]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="close"]') :
                $('TBD');
    }

    // Back & Close button on Account balance and the same page/pop up
    get closePageBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-header/ion-toolbar/ion-button[2]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="close"]') :
                $('TBD');
    }
    get backPageBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-header/ion-toolbar/ion-button[1]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="arrow back"]') :
                $('TBD');
    }

    //Last Login popup Close Button
    get lastLoginPopupCloseBTN(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//html/body/app-root/ion-app/ion-toast//div/div/div[2]/button/div') :
            browser.isAndroid ? 
                $('//android.widget.Button[@text="Close"]') :
                $('id:Close');
    }
    async tapCloseLastLoginPopupBtn () {
        await this.lastLoginPopupCloseBTN.click();
    }
    
    //Log out pop up
    get logOutPopUpText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('aria/Logout') : 
            browser.isAndroid ? 
                $('//*[@text="Logout"]') :
                $('id:Logout');
    }
    get closeLogOutPopUpBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-header/ion-toolbar/ion-button[2]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="close"]') :
                $('id:close');
    }
    
    async isLogOutPopUp () {
        await expect(this.logOutPopUpText).toBeExisting();
    }
    async tapCloseLogOutPopUpBtn() {
        await this.closeLogOutPopUpBtn.click();
    }
    async tapBackPopUpBtn() {
        await this.backPopUpBtn.click();
    }
    
    // Tap Ok/Deny button on the System pop up
    async tapPermissionSystemAllowBtn() {
        await this.permissionSystemAllowBtn.click();
    }
    async tapPermissionSystemDenyBtn() {
        await this.permissionSystemDenyBtn.click();
    }

    // Tap Ok/Cancel button on the App pop up
    async tapOkBtn() {
        await this.okBtn.click();
    }
    async tapCancelBtn() {
        await this.cancelBtn.click();
    }

    // Tap Ok/Cancel button on the App pop up
    async tapAllowBtn() {
        await this.allowBtn.click();
    }
    async tapDontAllowBtn() {
        await this.dontAllowBtn.click();
    }

    // Get the App permission location pop up text
    async permissionLocationApp1GetText() {
        return (await this.permissionLocationAppText1).getText();
    }
    async permissionLocationApp2GetText() {
        return (await this.permissionLocationAppText2).getText();
    }
    async permissionLocationApp3GetText() {
        return (await this.permissionLocationAppText3).getText();
    }


}

module.exports = new PopUpPage();
