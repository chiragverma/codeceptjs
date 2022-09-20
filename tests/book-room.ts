Feature('Typescript Example');

Scenario('test something', ({ I, calender }) => {
  I.amOnPage('https://www.mrandmrssmith.com/');
  I.fillField('#react-s_query', 'london');
  I.click(locate('.enterTrigger').withText('London'));
  calender.selectDates()
  I.click('#s_search');
  I.click('//*[@id="search-list"]/li[1]/article/div/div/a')
  I.wait(5);
  I.see('GET A ROOM', '#list-menu-rooms');
  I.wait(5);
});
