const BasePage = require('./basePage');

/**
* Location page during the first start
*/

class LocationPage extends BasePage {

    get stardustLogoImg(){ 
        return browser.isAndroid ? $('//android.widget.Image[@text="splashlogo"]') : $('TBD');
    }

    // Pennsylvania button
    get pennsylvaniaStateBtn(){
        return browser.isAndroid ? $('//android.widget.TextView[@text="Pennsylvania"]') : $('TBD');
    }
    get pgcbLogoImg(){
        return browser.isAndroid ? $('//android.widget.Image[@text="PGCB"]') : $('TBD');
    }
    get rgLogoImg(){
        return browser.isAndroid ? $('//android.widget.Image[@text="rg_logo"]') : $('TBD');;
    }

    // New Jersey
    get newJerseyStateBtn(){
        return browser.isAndroid ? $('//android.widget.TextView[@text="New Jersey"]') : $('TBD');
    }
    get dgeLogoImg(){
        return browser.isAndroid ? $('//android.widget.Image[@text="dge_logo"]') : $('TBD');
    }
    get njrgLogoImg(){
        return browser.isAndroid ? $('//android.widget.Image[@text="njrglogo"]') : $('TBD');
    }
    

    // Ontario
    get ontarioStateBtn(){
        return browser.isAndroid ? $('//android.widget.TextView[@text="Ontario"]') : $('TBD');
    }
    
    // Text
    get copyRightText(){
        return browser.isAndroid ? $('//*[@text="Copyright © 2024 Boyd Gaming. All rights reserved."]') : $('TBD');
    }
    get gamblingProblrmText(){
        return browser.isAndroid ? $('//*[@text="Gambling Problem? Call 1-800-Gambler"]') : $('TBD');
    }
    
    async isLocationPagePresent() {
        await expect(this.stardustLogoImg).toBeDisplayed();
        await expect(this.copyRightText).toBeDisplayed();
        await expect(this.gamblingProblrmText).toBeDisplayed();
    }
    async tapPennsylvaniaBtn () {
        await this.pennsylvaniaStateBtn.click();
    }
    async tapNewJerseyBtn () {
        await this.newJerseyStateBtn.click();
    }
    async tapOntarioBtn () {
        await this.ontarioStateBtn.click();
    }
    async getCopyRightText () {
        return await this.copyRightText.getText();
    }
    async getGamblingProblrmText () {
        return await this.gamblingProblrmText.getText();
    }

}

module.exports = new LocationPage();
