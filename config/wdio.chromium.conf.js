const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');

config.portt = 4723;
config.specs = [
    '../test/specs/**/*.js'
];
// config.services = [
//     ['chromedriver', {
//         logFileName: 'wdio-chromedriver.log', // default
//         // outputDir: 'driver-logs', // overwrites the config.outputDir
//         // args: ['--silent']
//     }]
// ];
config.capabilities = [{
    // capabilities for local Appium web tests on an Android Emulator
    browserName: 'Chrome',
    'goog:chromeOptions': {
        args: process.env.CI ? ['headless', 'disable-gpu'] : []
    },
    'custom:caps': 'web',
    execArgv: ['--inspect'],
}];

exports.config = config;