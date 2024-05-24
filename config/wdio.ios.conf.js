const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');
const iosPath = path.join(process.cwd(), '..\\app\\ios\\Stardust-release_1.38.ipa');

config.port = 4723;
config.specs = [
    '../test/specs/**/*.js'
];
config.services = ['appium'];
config.capabilities = [{
    // capabilities for local Appium web tests on an iOS device
    // TBD - need set up
    platformName: 'iOS',     
    // maxInstances: 1,
    hostname: '10.25.7.115',

    // 'appium:deviceName': 'iPhone 15 Pro Max',
    // 'appium:udid': '1D0126BF-E7C2-4135-BC55-B071CC4F866F',
    // 'appium:platformVersion': '17.2',
    
    // "appium:app": iosPath,

    'appium:deviceName': 'iPhone 13',
    'appium:udid': '00008110-0002045921D1801E',
    'appium:platformVersion': '17.1.2',
    'appium:automationName': 'XCUITest',
    "appium:bundleId": "com.boydgaming.stardustcasino",
    "appium:waitforTimeout": 30000,
    "appium:newCommandTimeout": 7200
}]

exports.config = config;