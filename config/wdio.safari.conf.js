const path = require ('path');
const {config} = require ('./wdio.shared.conf.js');

config.port = 4444;
config.hostname = '10.25.7.115',
config.specs = [
    '../test/specs/**/*.js'
];
config.capabilities = [{
    
    browserName: 'safari',
    maxInstances: 1,
    services: [
        ['safaridriver', {
            outputDir: './logs',
            logFileName: 'wdio-safaridriver.log'
        }]
    ],
    'custom:caps': 'web'
}];

exports.config = config;