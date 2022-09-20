const { I } = inject()

export = {
  selectDates: (checkIn="15", checkOut="20") => {
    I.doubleClick('.date-from');
    I.doubleClick('.next-month');
    I.click(locate('.calendarDay').withText(checkIn));
    I.click(locate('.calendarDay').withText(checkOut));
  }
}