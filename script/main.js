// mon Lunch2 main js


$(document).ready(function() {
  'use strict';

  console.log('DOM is ready');


  // display the current month and year
  var currentMonth, currentYear, currentStudent;
  currentMonth = 'Octobre';
  currentYear = '2018';

  $('.heading__month').text(currentMonth);
  $('.heading__year').text(currentYear);

  // Student Constructor
  function Student(firstName, lastName, schoolYear, school) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.schoolYear = schoolYear,
      this.school = school
  }

  // define students
  var student01 = new Student('Gael', 'Gonzalez Bastide', '3ème année', 'Ecole Ile des Soeurs');
  var student02 = new Student('Leo', 'Gonzalez Bastide', '3ème année', 'Ecole Ile des Soeurs');

  // display info current student
  $('.student__name').text(student01.firstName + ' ' + student01.lastName);
  $('.student__schoolYear').text(student01.schoolYear);
  $('.student__school').text(student01.school);

  // DISPLAY THE CALENDAR
  var calendarItemHtml, calendarItems, newCalendarItem, sideOrderHtml, beverageItems, journeePedagos, conges, noOrders;

  journeePedagos = ['lundi 1 octobre'];
  console.log(journeePedagos)
  conges = ['lundi 8 octobre'];
  noOrders = [];


  // Side Order
  const sideOrder = 'Crudités';

  // Beverages
  beverageItems = ['Eau', 'Jus', 'Lait 2%'];

  calendarItemHtml = '<h4 class="calendar__day">%date%</h4><ul class="calendar__menu list-group"><li class="calendar__mainDish list-group-item">%mainDish%</li><li class="calendar__sideOrder list-group-item">%sideOrder%</li><li class="calendar__beverage list-group-item">%beverage%</li><li class="calendar__dessert list-group-item">%dessert%</li><li class="calendar__note list-group-item"><span class="alert alert-info" role="alert">%note%</span></li></ul>';



  // Beverages
  beverageItems = ['Eau', 'Jus', 'Lait 2%'];


  // get all the days of the month
  calendarItems = getDaysInMonth(9, 2018);

  // display all the days of the current month
  for (var i = 0; i < calendarItems.length; i++) {
    // add a new calendar item
    newCalendarItem = $('<div class="calendar__item card m-2 col-12 col-sm-12 col-md-6 col-lg-3">').html(calendarItemHtml);
    $('#menus > .row').append(newCalendarItem);

    // display the formatted date
    var formattedDate = calendarItems[i];
    var dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    formattedDate = formattedDate.toLocaleDateString("fr-FR", dateOptions);
    formattedDate = formattedDate.replace('2018', '');

    $("h4:contains('%date%')").text(formattedDate);

    // display the sideOrder
    $('.calendar__sideOrder').text(sideOrder);

    // display the beverage Eau
    $('.calendar__beverage').text(beverageItems[0]);
  }

  // get all days of a selected month and year
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


  // DISPLAY THE DAILY MENU





}); // DOM ready
