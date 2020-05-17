const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3010',
  capabilities: {
    browserName: 'MicrosoftEdge'
  },
  framework: 'jasmine',
  specs: ['specs/*.js'],
  logLevel: 'WARN',
  plugins: [
    {
      package: 'protractor-react-selector'
    }
  ],
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);
    require('@babel/register')({
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true
          }
        ],
        [
          'module-resolver',
          {
            root: ['.']
          }
        ]
      ]
    });

    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true
        },
        spec: {
          displayPending: true,
          displayDuration: true
        },
        summary: {
          displaySuccesses: false,
          displayFailed: false,
          displayPending: false
        }
      })
    );

    global.defaultTimeout = 10000;
  },
  jasmineNodeOpts: {
    showColors: true
  }
};
