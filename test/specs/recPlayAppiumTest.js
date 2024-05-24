// Example rec & play test.
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await driver.touchAction([
            { action: 'press', x: 935, y: 3078 },
            { action: 'moveTo', x: 940, y: 434 },
            'release'
          ]);
          await driver.touchAction([
            { action: 'press', x: 163, y: 1824 },
            { action: 'moveTo', x: 169, y: 1824 },
            'release'
          ]);
          const el2 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_button");
          await el2.click();
          const el3 = await driver.$("xpath://android.widget.Button[@text=\"Ok\"]");
          await el3.click();
          const el4 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
          await el4.click();
          const el5 = await driver.$("xpath://android.widget.TextView[@text=\"New Jersey\"]");
          await el5.click();
          const el6 = await driver.$("xpath://android.widget.Button[@text=\"Log in\"]");
          await el6.click();
          const el7 = await driver.$("xpath://android.app.Dialog/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.ListView/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText");
          await el7.addValue("ant1@yopmail.com");
          const el8 = await driver.$("xpath://android.app.Dialog/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.ListView/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText");
          await el8.addValue("Qa!123456");
          const el9 = await driver.$("xpath:(//android.widget.Button[@text=\"Log in\"])[2]");
          await el9.click();
          const el10 = await driver.$("xpath://android.widget.ListView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText");
          await el10.addValue("111111");
          const el11 = await driver.$("xpath://android.widget.Button[@text=\"Verify\"]");
          await el11.click();
          const el12 = await driver.$("xpath:(//android.widget.Button[@text=\"menu\"])[2]");
          await el12.click();
          await driver.switchContext("WEBVIEW_com.boydgaming.stardustcasino");
          const el13 = await driver.$("xpath://ion-app/ion-menu[1]/ion-content/sidemenu/div/ion-list[2]/ion-list[1]/ion-item");
          await el13.click();
          const el14 = await driver.$("xpath://div[@id=\"sub-item-0\"]/ion-item[1]");
          await el14.click();
          await driver.switchContext("NATIVE_APP");
          const el16 = await driver.$("xpath://android.widget.Button[@text=\"close\"]");
          await el16.click();
          const el17 = await driver.$("xpath:(//android.widget.Button[@text=\"menu\"])[2]");
          await el17.click();
          await driver.switchContext("WEBVIEW_com.boydgaming.stardustcasino");
          const el18 = await driver.$("xpath://ion-app/ion-menu[1]/ion-content/sidemenu/div/ion-list[2]/ion-list[1]/ion-item");
          await el18.click();
          const el19 = await driver.$("xpath://ion-app/ion-menu[1]/ion-content/sidemenu/div/ion-list[2]/ion-item");
          await el19.click();
          await driver.switchContext("NATIVE_APP");
    })
})

