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

  var mainDishes, replacementDishes, desserts, beverageItems;

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

  // console.log('nombre de plats principaux :' , mainDishes.length);
  // var mainDishesSorted = mainDishes.sort();


  // console.log(mainDishesSorted);

  // replacement main dishes
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

  // console.log('nombre de desserts :' ,  desserts.length)

  // Side Orders
  const sideOrder = 'Crudités';

  // Beverages
  beverageItems = [
    'Eau',
    'Jus',
    'Lait 2%'
  ];


  // // DISPLAY THE CALENDAR
  var calendarItemHtml, calendarItems, newCalendarItem, sideOrderHtml, pedagoDays, dayOffs, noOrders;

  // define days off (pedago, etc.)
  pedagoDays = ['lundi 1 octobre'];
  dayOffs = ['lundi 8 octobre'];
  noOrders = [];
  // console.log(pedagoDays, dayOffs, noOrders);


  calendarItemHtml = '<h4 class="calendar__day">%date%</h4><ul class="calendar__menu list-group"><li class="calendar__mainDish list-group-item">%mainDish%</li><li class="calendar__sideOrder list-group-item">%sideOrder%</li><li class="calendar__beverage list-group-item">%beverage%</li><li class="calendar__dessert list-group-item">%dessert%</li><li class="calendar__note list-group-item"><span class="alert alert-info" role="alert">%note%</span></li></ul>';


  // get all the opening days of the month
  calendarItems = getDaysInMonth(9, 2018);
// console.log('nombre de calendarItems ', calendarItems.length);

  // display all the opening days of the month
    for (var i = 0; i < calendarItems.length; i++) {
      // display the formatted date
      var formattedDate = calendarItems[i];

      // display opening weekdays only
      var pedago = formattedDate.search(pedagoDays[0]);
      var dayOff = formattedDate.search(dayOffs[0]);
      var saturday = formattedDate.search('samedi');
      var sunday = formattedDate.search('dimanche');
      var isDayOff = false;

      if (saturday === -1 && sunday === -1 && pedago === -1 && dayOff === -1) {

        isDayOff = true;

        // add a new calendar item
        newCalendarItem = $('<div class="calendar__item card m-2 col-12 col-sm-12 col-md-6 col-lg-3">').html(calendarItemHtml);
        $('#menus > .row').append(newCalendarItem);

        // add an id to each calendar item
        var id = 'calendar__' + i;
        $('.calendar__item').attr('id', function(i) {
          return 'calendar__' + (i + 1);
        });

        $("h4:contains('%date%')").text(formattedDate);

      } else {
        isDayOff = false; // on n'affiche rien
      }


        // display mainDish
        var mainDish = mainDishes[i];
        // console.log(mainDishes[i]);
        $(".calendar__mainDish:contains('%mainDish%')").text(mainDish);

        // display the sideOrder
        $('.calendar__sideOrder').text(sideOrder);

        // display water
        $('.calendar__beverage').text(beverageItems[0]);

      } // end for loop calendarItems



  // get all days of a selected month and year
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];


    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);

    }
    // console.log(days);

    // Format the date in French 'lundi 1 octobre'
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
        formattedDate = formattedDate.replace('2018', '');
        formattedDays.push(formattedDate) + 1;
    }
    // console.log(formattedDays);
    // console.log(formattedDate);
    //

    // TODO eliminer les weekends ici et les pedago, conges.
    return formattedDays;

  }


  // function addFormattedDate(date){
  //   var formattedDays = [];
  //   formattedDays = formattedDays.push(date);
  //   console.log(formattedDays);
  //   return formattedDays;
  // }




}); // DOM ready
