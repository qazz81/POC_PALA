const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');
// const androidPath = path.join(process.cwd(), '..\\app\\android\\Stardust-release1.38.apk');
const androidPath = path.join(process.cwd(), '..\\app\\android\\Stardust-debug1.44.apk');

config.port = 4723;
config.specs = [
    '../test/specs/**/*.js'
];
config.services = ['appium'];
config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "Android",

    // 'appium:deviceName': 'nightwatch-android-11',
    // 'appium:udid': 'emulator-5554',
    // 'appium:platformVersion': '11.0',
    
    // 'appium:deviceName': 'Motorola',
    // 'appium:udid': 'ZY22GXJ8T7',
    // 'appium:platformVersion': '12.0',
     
    "appium:deviceName": "Galaxy A54 5G",
    "appium:platformVersion": "14",
    "appium:deviceID": "RZCWB036QJD",

    // "appium:deviceName": "Xiaomi 9 pro",
    // "appium:platformVersion": "12",
    // "appium:deviceID": "159efabc",
    
    "appium:automationName": "UiAutomator2",
    "appium:appWaitActivity": "com.boydgaming.stardustcasino.MainActivity",
    "appium:app": androidPath,
    // "appium:fullReset": false,
    // "appium:noReset": true
}]

exports.config = config;