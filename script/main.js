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


  // DATA

  var mainDishes, replacementDishes, desserts, beverages;

  // main dishes
  mainDishes = [
    "Spaghetti aux boulettes de viande",
    "Sauté de poulet aux légumes avec couscous",
    "Tortellini aux trois fromages sauce rosé",
    "Mini-pizza poulet tomates et fromage mozzarella",
    "Penne au poulet avec poivrons en sauce marinara",
    "Chili au boeuf avec pain plat",
    "Macaroni aux fromages gratiné",
    "Croissant à la dinde, fromage et laitue",
    "Macaroni sauce à la viande avec fromage",
    "Poitrine de poulet au beurre avec du riz",
    "Pâtes avec boulettes à la mexicaine",
    "Croquettes de poulet cuites au four avec couscous aux légumes",
    "Sandwich aux oeufs ou aux poulet",
    "Bâtonnets de poisson avec du riz et carottes",
    "Spaghettis au beurre avec saucisses italiennes en sauce",
    "Poulet sauce Thai avec du riz et légumes",
    "Mijoté de boeuf aux carottes et couscous",
    "Sandwich au poulet et laitue",
    "Rotini avec boulettes de boeuf en sauce tomate et basilic",
    "Hautes de cuisse de poulet au beurre avec du riz blanc",
    "Lanière de poulet avec couscous et légumes vapeur"
  ];

  // console.log('nombre de plats principaux :', mainDishes.length);
  // var mainDishesSorted = mainDishes.sort();
  // console.log(mainDishesSorted);

  // Replacement main dishes
  replacementDishes = [
    "Pâtes avec boulettes en sauce ou spaghetti sauce à la viande",
    "Croquettes de poulet cuites au four",
    "Crêpes jambon et fromage",
    "Salade César au poulet",
    "Sandwich dinde et fromage sur croissant ou baguette"

  ];
  // console.log('nombre de plats de remplacement :' , replacementDishes.length);

  // Desserts

  desserts = [
    "Biscuit, fruit",
    "Biscuit d’avoine",
    "Mini-muffin chocolat, fruit",
    "Dessert, fruit",
    "Compote de pommes ou un fruit",
    "Pain au banane",
    "Mini-muffin aux son",
    "Barre tendre, fruit",
    "Yogourt",
    "Muffin aux pommes",
    "Fruit",
    "Mini-muffin, fruit",
    "Yogourt en tube",
    "Salade de fruits"
  ];

  const replacedDessert = 'Remplacer le yogourt par un autre dessert SVP';

  // Replace yogourt
  function replaceDessert(str, arr) {
    var index = arr.indexOf(str);

    if (index !== -1) {
      arr[index] = replacedDessert;
    }
  }

  // console.log(desserts);


  // console.log('nombre de desserts :' ,  desserts.length)

  // Side Orders
  const sideOrder = 'Crudités';

  // Beverages
  beverages = [
    'Eau',
    'Jus',
    'Lait 2%'
  ];

  // define non opening days (pedago, days off)
  const pedagoDay01 = 'lundi 1 octobre';
  const dayOff01 = 'lundi 8 octobre';
  // noOrders = [];
  // console.log(pedagoDays, dayOffs, noOrders);

  // DISPLAY THE CALENDAR
  var calendarItemHtml, calendarItems, newCalendarItem, sideOrderHtml, noOrders;

  // DOM elements
  calendarItemHtml = '<h4 class="calendar__day">%date%</h4><ul class="calendar__menu list-group"><li class="calendar__mainDish list-group-item">%mainDish%</li><li class="calendar__sideOrder list-group-item">%sideOrder%</li><li class="calendar__beverage list-group-item">%beverage%</li><li class="calendar__dessert list-group-item">%dessert%</li><li class="calendar__note list-group-item"><span>Aucune indication particulière</span></li></ul>';


  // get all the opening days of the month with French format
  calendarItems = getDaysInMonth(9, 2018);
  // console.log('nombre de calendarItems hors de la fonction ', calendarItems.length);

  // display all the opening days of the month
  for (var i = 0; i < calendarItems.length; i++) {

    var openingDay = calendarItems[i];

    // add a new calendar item
    newCalendarItem = $('<div class="calendar__item card m-2 col-12 col-sm-12 col-md-6 col-lg-3">').html(calendarItemHtml);
    $('#menus > .row').append(newCalendarItem);

    // add an id to each calendar item
    var id = 'calendar__' + i;
    $('.calendar__item').attr('id', function(i) {
      return 'calendar__' + (i + 1);
    });

    $("h4:contains('%date%')").text(openingDay);


    // TODO display select to choose between default mainDish and replacement Dish

    // display default mainDish
    var mainDish = mainDishes[i];
    // console.log(mainDishes[i]);
    $(".calendar__mainDish:contains('%mainDish%')").text(mainDish);

    // display the sideOrder
    $('.calendar__sideOrder').text(sideOrder);

    // display water
    $('.calendar__beverage').text(beverages[0]);

    // display dessert
    // TODO display select to choose among different options
    replaceDessert('Yogourt', desserts);
    replaceDessert('Yogourt en tube', desserts);
    var dessert = desserts[i];
    // console.log('nombre de desserts :', desserts.length);
    // console.log('chaque dessert :', desserts[i]);

    if (desserts[i] !== replacedDessert) {
      $(".calendar__dessert:contains('%dessert%')").text(dessert);
    } else {
      $(".calendar__dessert:contains('%dessert%')").text(dessert)
        .css({
          'background-color': '#fcf8e3', // alert warning color
        });
    }

    // display special indication
    // TODO display special indication with alert alert-info classes

  } // end for loop calendarItems


  // get all days of a selected month and year
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];

    while (date.getMonth() === month) {

      // create array of opening days only
      if ((date.getDay() != 0) && (date.getDay() != 6)) {
        // console.log('jour de semaine');
        days.push(new Date(date));
      }
      date.setDate(date.getDate() + 1);
    }

    // Format the date as in French 'lundi 1 octobre'
    var formattedDays = [];
    var dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    for (var i = 0; i < days.length; i++) {
      var formattedDate = days[i];
      formattedDate = formattedDate.toLocaleDateString("fr-FR", dateOptions);
      formattedDate = formattedDate.replace(' 2018', '');
      formattedDays.push(formattedDate) + 1;
      // console.log(formattedDate);
    }

    // Remove non-opening days (pedago and days off)
    removeDaysOff(pedagoDay01, formattedDays);
    removeDaysOff(dayOff01, formattedDays);
    // console.log('nombre de jours dans la fonction', formattedDays.length);

    return formattedDays;

  }


  // remove DaysOff
  function removeDaysOff(str, arr) {
    var days = arr;
    // console.log('days dans fonction remove: ', days);
    var pos = arr.indexOf(str);
    // console.log('jour et index de la string: ', str + " " + pos);
    arr.splice(pos, 1);
  }





}); // DOM ready
