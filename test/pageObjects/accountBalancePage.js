const BasePage = require('./basePage');

/**
 * Lobby page for Log in and log out user
 */
class AccountBalancePage  extends BasePage {
    get accountBalanceTitle(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//div[@class="text-overflow"]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@text="Account balance"]') :
                $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[6]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[1]');
    }
    get accountBalanceSumm(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[1]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[contains(@text,"BALANCE: $")]') :
                $('TBD');
    }
    get cashText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-left md hydrated"][1]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@text="Cash"]') :
                $('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeWebView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[6]/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeStaticText[1]');
    }
    get cashNumber(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-right md hydrated"][1]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[3]/android.widget.TextView') :
                $('TBD');
    }
    get bonusText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-left md hydrated"][2]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@text="Bonus"]') :
                $('TBD');
    }
    get bonusNumber(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-right md hydrated"][2]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[5]/android.widget.TextView') :
                $('TBD');
    }
    get restrictedCashText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-left md hydrated"][3]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@text="Restricted Cash"]') :
                $('TBD');
    }
    get restrictedCashNumber(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-right md hydrated"][3]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[7]/android.widget.TextView') :
                $('TBD');
    }
    get reservedCashText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-left md hydrated"][4]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@text="Reserved Cash"]') :
                $('TBD');
    }
    get reservedCashNumber(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-grid[@class="ion-no-padding md hydrated"]/ion-row[@class="md hydrated"])[2]/ion-col[@class="ion-text-right md hydrated"][4]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[9]/android.widget.TextView') :
                $('TBD');
    }
    get cashIsUnrestText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-col[@class="md hydrated"])[5]/p[1]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[10]/android.widget.TextView[1]') :
                $('TBD');
    }
    get bonusIsTheText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-col[@class="md hydrated"])[5]/p[2]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[10]/android.widget.TextView[2]') :
                $('TBD');
    }
    get restrictedCashIsText(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('(//ion-col[@class="md hydrated"])[5]/p[3]') : 
            browser.isAndroid ? 
                $('//android.widget.TextView[@resource-id="background-content"]/../android.view.View/android.view.View[10]/android.widget.TextView[3]') :
                $('TBD');
    }
    get addFundsBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-button[@class="ion-color ion-color-primary md button button-large button-solid ion-activatable ion-focusable hydrated"]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="Add funds"]') :
                $('TBD');
    }
    get bonusDetailsBtn(){
        return (browser.requestedCapabilities['custom:caps']) ? 
            $('//ion-button[@class="ion-color ion-color-secondary md button button-large button-solid ion-activatable ion-focusable hydrated"]') : 
            browser.isAndroid ? 
                $('//android.widget.Button[@text="Bonus details"]') :
                $('TBD');
    }
    
    actualPageData(){
        return {
            getAccountBalanceTitleText: async () => await this.accountBalanceTitle.getText(),
            getAccountBalanceSummText: async () => await this.accountBalanceSumm.getText(),
            getCashText: async () => await this.cashText.getText(),
            getCashNumber: async () => await this.cashNumber.getText(),
            getBonusText: async () => await this.bonusText.getText(),
            getBonusNumber: async () => await this.bonusNumber.getText(),
            getRestrictedCashText: async () => await this.restrictedCashText.getText(),
            getRestrictedCashNumber: async () => await this.restrictedCashNumber.getText(),
            getReservedCashText: async () => await this.reservedCashText.getText(),
            getReservedCashNumber: async () => await this.reservedCashNumber.getText(),
            getCashIsUnrestText: async () => await this.cashIsUnrestText.getText(),
            getBonusIsTheTextText: async () => await this.bonusIsTheText.getText(),
            getRestrictedCashIsText: async () => await this.restrictedCashIsText.getText(),
            isAddFundsBtn: async () => await this.addFundsBtn.isDisplayed(),
            isBonusDetailsBtn: async () => await this.bonusDetailsBtn.isDisplayed()
        }
    }

    get expectedPageData(){
        return {
            accountBalanceTitle: "Account balance",
            accountBalanceSumm: summ => `BALANCE: $${summ}`,
            cashText: "Cash",
            cashNumber: number => `$${number}`,
            bonusText: "Bonus",
            bonusNumber: bonusNumber => `$${bonusNumber}`,
            restrictedCashText: "Restricted Cash",
            restrictedCashNumber: (restrictedCashNumber1,restrictedCashNumber2,restrictedCashNumber3) => 
                `$${restrictedCashNumber1} ($${restrictedCashNumber2} cash + $${restrictedCashNumber3} bonus)`,
            reservedCashText: "Reserved Cash",
            reservedCashNumber: reservedCashNumber => `$${reservedCashNumber}`,
            cashIsUnrestText: "Cash is unrestricted money you can withdraw.",
            bonusIsTheText: "Bonus is the total amount of bonus we gave you from a promotional offer plus any winnings from wagers made with restricted money.",
            restrictedCashIsText: "Restricted Cash is your deposit that is now restricted until the bonus terms are met or you forfeit the offer.",
            isAddFundsBtn: true,
            isBonusDetailsBtn: true
        }
    } 
}

module.exports = AccountBalancePage;