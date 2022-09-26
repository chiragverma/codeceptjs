require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./presettings.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**.ts',
  output: './output',
  helpers: {
    Appium: {
      "waitForTimeout": 5000,
      app: '/Users/chiragverma/Desktop/codeceptjs/apps/Apps.zip',
      platform: 'iOS',
      device: 'iPhone 13',
      desiredCapabilities: {deviceName: "iPhone 13", platformVersion: "15.2", automationName: 'XCUITest'}
    },
    CustomHelper: {
      require: './CustomHelper.ts'  
    }
  },
  bootstrap,
  /* include: {
    loginPage: './pages/loginPage.ts',
    homePage: './pages/homePage.ts'
  }, */
  name: 'typescript-boilerplate',
  plugins: {
    "allure": {},
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}