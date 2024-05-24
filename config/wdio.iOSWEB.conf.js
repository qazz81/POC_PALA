const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');
const androidPath = path.join(process.cwd(), '..\\app\\android\\Stardust-release1.38.apk');

// config.portt = 4444;
config.specs = [
    '../test/specs/**/*.js'
];
config.services = ['appium'];
config.capabilities = [{
    platformName: 'iOS',
    browserName: 'safari',   
    maxInstances: 1,
    hostname: '10.25.7.115',
    acceptInsecureCerts: true,
    'appium:platformName': 'iOS',
    'appium:deviceName': 'iPhone 13',
    'appium:udid': '00008110-0002045921D1801E',
    'appium:platformVersion': '17.1.2',
    'appium:automationName': 'XCUITest',
    "appium:waitforTimeout": 30000,
    "appium:newCommandTimeout": 7200,
    'custom:caps': 'web'
}]

exports.config = config;