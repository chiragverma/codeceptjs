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
    Playwright: {
      url: 'https://www.mrandmrssmith.com/',
      show: true,
      windowSize: '1200x800',
      browser: 'chromium'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  bootstrap,
  include: {
    loginPage: './loginPage.ts',
    homePage: './homePage.ts',
    calender: './calender.ts'
  },
  name: 'typescript-boilerplate',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}