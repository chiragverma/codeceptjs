Feature('Dashboard and Settings tabs are loaded');

Scenario('should be able to see all the tabs', ({ I }) => {
  I.waitForElement('~Instructions tab')
  I.waitForElement('~Dashboard tab')
  I.waitForElement('~Settings tab')
  I.click('~Dashboard tab');
  I.waitForElement('~dashboard-title')
  I.waitForElement('~Coin-btc')
  I.waitForElement('~Coin-eth')
  I.click('~Settings tab');
  I.waitForElement('~settings-title')
  I.waitForElement('~Only show "Bitcoin" coins')
  I.waitForElement('~Only show winners')
  I.waitForElement('~Only show losers')
});