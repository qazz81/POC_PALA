const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');
const androidPath = path.join(process.cwd(), '..\\app\\android\\Stardust-release1.38.apk');

config.portt = 4723;
config.specs = [
    '../test/specs/**/*.js'
];
config.services = [['appium',{args: {"allow-insecure": "chromedriver_autodownload"}}]];
config.capabilities = [{
    platformName: 'Android',
    browserName: 'chrome',

    // capabilities for local Appium web tests on an Android Emulator
    // 'appium:deviceName': 'nightwatch-android-11',
    // 'appium:platformVersion': '11.0',
    // 'appium:udid': 'emulator-5554',

    'appium:deviceName': 'Galaxy A54 5G',
    'appium:platformVersion': '14',
    "appium:deviceID": "RZCWB036QJD",
 
    'appium:automationName': 'UiAutomator2',
    'custom:caps': 'web'
}]

exports.config = config;