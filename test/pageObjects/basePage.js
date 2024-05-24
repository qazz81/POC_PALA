// const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class BasePage {
    
    get gamePalaIDInProgress () {
        return (browser.requestedCapabilities['custom:caps']) ?
        $('//iframe') :
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="pala-game-id"]') :
                $('id:v2.0.4');
    }
    
    get closeGameBTN(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-button[@class="ion-align-items-end md button button-clear ion-activatable ion-focusable hydrated"][2]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="close"]') :
                $('id:< back');
    }

    async waitGameCloseGameBTN () {
        await this.closeGameBTN.waitForDisplayed();
    }
    async waitIsGamePalaInProgress () {
        await this.gamePalaIDInProgress.waitForDisplayed();
        await browser.pause(4000);
    }
    async closeGame () {
        await this.closeGameBTN.click();
    }
    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openWebPage (path) {
        return browser.url(`${path}`)
    }
}
module.exports = BasePage;
