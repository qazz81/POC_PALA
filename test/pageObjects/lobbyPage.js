const BasePage = require('./basePage');

/**
 * Lobby page for Log in and log out user
 */
class LobbyPage  extends BasePage {
    get hamburgerMenuBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//html/body/app-root/ion-app/div/app-site-header/ion-header/div/ion-grid/ion-row[2]/ion-col[1]/ion-menu-button') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="menu"]') :
                $('id:menu');
    }
    get locationLobby(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('.value-label') : 
            browser.isAndroid ? 
                $('//android.webkit.WebView[@text="Stardust Casino"]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.TextView') :
                $('id:NEW JERSEY');
    }
    get logInLobbyBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('button=Log in') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="Log in"]') :
                $('id:Log in');
    }
    get joinNowLobbyBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('button=Join now') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="Join now"]') :
                $('id:Join now');
    }
    get userMenuBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-menu-button[@menu="main-menu"]') : 
            browser.isAndroid ? 
                $('(//android.widget.Button[@text="menu"])[2]') :
                $('(//XCUIElementTypeButton[@name="menu"])[2]');
    }
    get findGameField(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-label[@class="sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-light md hydrated"]') : 
            browser.isAndroid ? 
                $('//android.widget.EditText') :
                $('//XCUIElementTypeTextField[@value="Find games"]');
    }
    get findGameFieldTapped(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//input[@aria-label="search text"]') : 
            browser.isAndroid ? 
                $('//android.widget.EditText') :
                $('//XCUIElementTypeTextField[@value="Find games"]');
    }
    get CancelFindGameBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-button[@class="desktop-search-cancel-button md button button-solid ion-activatable ion-focusable hydrated"]') : 
            browser.isAndroid ? 
                $('//android.widget.Image[@text="close outline"]') :
                $('id:close outline');
    }
    // get lookGameFromFilter(text){
    //     return browser.isAndroid ? $(`//android.widget.Image[@text="${text}"]`) : $('TBD');
    // }

    get accountBalanceBtn () {
        return (browser.requestedCapabilities['custom:caps']) ?
            $('/html/body/app-root/ion-app/div/app-site-header/ion-header/div/ion-grid/ion-row[2]/ion-col[2]/app-navbar-deposit/div/div[1]/h6') : 
            browser.isAndroid ? 
                $('//android.webkit.WebView[@text="Stardust Casino"]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[3]/android.widget.TextView') :
                $('//XCUIElementTypeStaticText[4]');
    }
    async isLobbyPageUserLogOut () {
        await this.hamburgerMenuBtn;
        await expect(this.logInLobbyBtn).toBeExisting();
        await expect(this.joinNowLobbyBtn).toBeExisting();
    }
    async isLobbyPageUserLogIn () {        
        await this.hamburgerMenuBtn;
        await expect(this.userMenuBtn).toBeExisting();
    }
    async getLocationLobbyText () {
        return await this.locationLobby.getText();
    }
    async tapLoginLobbyBtn () {
        await this.logInLobbyBtn.click();
    }
    async tapUserMenuLobbyBtn () {
        await this.userMenuBtn.click();
    }
    async tapHamburgerMenuBtn () {
        await this.hamburgerMenuBtn.click();
    }
    async findGame (game) { // Initial state of Find Game field. On WEB can't be entered a text. On mobile it can
        if (browser.requestedCapabilities['custom:caps']){
            await this.tapfindGameWebBtn();
            await this.findGameTappedWeb(game);
        } else{
            await this.findGameField.setValue(game);
        }
    }
    async tapfindGameWebBtn () {
        await this.findGameField.click();
    }
    async findGameTappedWeb (game) { // State of Find Game field after tapping on the field. On WEB can be entered a text. On mobile it can
        await this.findGameFieldTapped.setValue(game);
    }
    
    //Tap on game which is shown on a list after filtered due to findGame(game) on lobby page 
    async tapOnFoundGame (game) { // Web - only GirlsBestFriends
        //ion-item[@class="cursor-pointer item md item-lines-none item-fill-none in-list hydrated item-label"][1]
        (browser.requestedCapabilities['custom:caps']) ?
            await $(`//img[@src="https://sdstage-cdn.palainteractive.com/assets/social/games/${game}"]`).click() : 
            browser.isAndroid ? 
                await $(`//android.widget.Image[@text="${game}"]`).click() :
                await $(`id:${game}`).click();
    }
    async tapAccountBalanceBtn () {
        await this.accountBalanceBtn.click();
    }

}

module.exports = new LobbyPage();