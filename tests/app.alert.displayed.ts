Feature('Alert is displayed');

Scenario('Press the button upon swiping to left and validate an Alert is displayed', ({ I }) => { 
  I.click('~Settings tab');
  I.seeElement('~Only show losers');
});