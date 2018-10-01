// mon Lunch2 main js


$(document).ready(function() {
  'use strict';

  // console.log('DOM is ready');


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
  // TODO display select to choose among different students
  var student01 = new Student('Gael', 'Gonzalez Bastide', '3ème année', 'Ecole Ile des Soeurs');
  var student02 = new Student('Leo', 'Gonzalez Bastide', '3ème année', 'Ecole Ile des Soeurs');

  // console.log(student02.firstName);

  // display info current student
  $('.student__name').text(student01.firstName + ' ' + student01.lastName);
  $('.student__schoolYear').text(student01.schoolYear);
  $('.student__school').text(student01.school);

  // DATA

  var mainDishes, desserts, desserts2, beverages;

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
  const pates = "Pâtes avec boulettes en sauce";
  const croquettes = "Croquettes de poulet cuites au four";
  const crepes = "Crêpes jambon et fromage";
  const salade = "Salade César au poulet";
  const sandwich = "Sandwich dinde et fromage sur baguette";
  const sandwich02 = "Sandwich au poulet";
  const noOrder = 'Pas de commande';


  // Desserts
  desserts = [
    "Biscuit, fruit",
    "Biscuit d’avoine",
    "Mini-muffin chocolat, fruit",
    "Dessert, fruit",
    "Compote de pommes ou un fruit",
    "Pain au banane",
    "Mini-muffin aux son",
    "Dessert, fruit",
    "Barre tendre, fruit",
    "Yogourt",
    "Biscuit, fruit",
    "Muffin aux pommes",
    "Dessert, fruit",
    "Fruit",
    "Yogourt",
    "Biscuit, fruit",
    "Mini-muffin, fruit",
    "Dessert, fruit",
    "Barre tendre, fruit",
    "Yogourt en tube",
    "Salade de fruits"
  ];
  // console.log(desserts);
  // console.log('nombre de desserts :', desserts.length)


  // desserts2 = [
  //   { val : 1, text : "Biscuit, fruit" },
  //   { val : 2, text : "Biscuit d’avoine" },
  //   { val : 3, text : "Mini-muffin chocolat, fruit" },
  //   { val : 4, text : "Dessert, fruit" },
  //   { val : 5, text : "Compote de pommes ou un fruit" },
  //   { val : 6, text : "Pain au banane" },
  //   { val : 7, text : "Mini-muffin aux son" },
  //   { val : 8, text : "Dessert, fruit" },
  //   { val : 9, text : "Barre tendre, fruit" },
  //   { val : 10, text : "Yogourt" },
  //   { val : 11, text : "Biscuit, fruit" },
  //   { val : 12, text : "Muffin aux pommes" },
  //   { val : 13, text : "Dessert, fruit" },
  //   { val : 14, text : "Fruit" },
  //   { val : 15, text : "Yogourt" },
  //   { val : 16, text : "Biscuit, fruit" },
  //   { val : 17, text : "Mini-muffin, fruit" },
  //   { val : 18, text : "Dessert, fruit" },
  //   { val : 19, text : "Barre tendre, fruit" },
  //   { val : 20, text : "Yogourt en tube" },
  //   { val : 21, text : "Salade de fruits" }
  // ];

  const replacedDessert = 'Remplacer le yogourt par un autre dessert SVP';

  // Side Orders
  const sideOrder = 'Crudités';

  // Beverages
  beverages = [
    'Eau',
    'Jus',
    'Lait 2%'
  ];

  // define non opening days (pedago, days off, no orders)
  const pedagoDay01 = 'lundi 1 octobre';
  const dayOff01 = 'lundi 8 octobre';
  // console.log(pedagoDays, dayOffs, noOrders);



  // DISPLAY THE CALENDAR
  var calendarItemHtml, calendarItems, newCalendarItem, dessertsHtml, domElement;

  // DOM String elements
  calendarItemHtml = '<h4 class="calendar__day">%date%</h4><ul class="calendar__menu list-group"><li class="calendar__mainDish list-group-item">%mainDish%</li><li class="calendar__sideOrder list-group-item">%sideOrder%</li><li class="calendar__beverage list-group-item">%beverage%</li><li class="calendar__dessert list-group-item">%dessert%</li></ul>';
  // calendarItemHtml = '<h4 class="calendar__day">%date%</h4><ul class="calendar__menu list-group"><li class="calendar__mainDish list-group-item">%mainDish%</li><li class="calendar__sideOrder list-group-item">%sideOrder%</li><li class="calendar__beverage list-group-item">%beverage%</li><li class="calendar__dessert list-group-item">%dessert%</li><li class="calendar__note list-group-item"><span class="small text-secondary">Aucune indication particulière</span></li></ul>';
  // dessertsHtml = '<select name="desserts" class="desserts"></select>';

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
    addHtmlAttr('.calendar__item', 'id', 'calendar');

    $("h4:contains('%date%')").text(openingDay);

    // display default mainDish
    // console.log(mainDishes[i]);

    // replace some main dishes by replacementDishes
    // TODO insert a select to choose between default mainDish and replacement Dish
    replaceDish('Tortellini aux trois fromages sauce rosé', mainDishes, pates);
    replaceDish('Mini-pizza poulet tomates et fromage mozzarella', mainDishes, croquettes);
    replaceDish('Chili au boeuf avec pain plat', mainDishes, pates);
    replaceDish('Macaroni aux fromages gratiné', mainDishes, croquettes);
    replaceDish('Macaroni sauce à la viande avec fromage', mainDishes, pates);

    // Pour Leo
    if ($(".student__name:contains('Leo')").length > 0) {
      replaceDish('Sandwich aux oeufs ou aux poulet', mainDishes, sandwich02);
    }
    // replaceDish('Sandwich aux oeufs ou aux poulet', mainDishes, sandwich02);
    var mainDish = mainDishes[i];

    // Pour Gael
    if ($(".student__name:contains('Gael')").length > 0) {
      replaceDish('Sandwich aux oeufs ou aux poulet', mainDishes, croquettes);
      replaceDish('Croissant à la dinde, fromage et laitue', mainDishes, pates);
      replaceDish('Sandwich au poulet et laitue', mainDishes, croquettes);
    }

    // add background-color styles to the replaced dish
    domElement = ".calendar__mainDish:contains('%mainDish%')";
    if (mainDishes[i] !== croquettes && mainDishes[i] !== pates && mainDishes[i] !== sandwich02) {
      $(domElement).text(mainDish);
    } else {
      addStyles(domElement);
      $(domElement).text(mainDish);
    }


    // display the side Order
    $('.calendar__sideOrder').text(sideOrder);

    // display water
    $('.calendar__beverage').text(beverages[0]);

    // display dessert
    // TODO display select to choose among different options
    $(".calendar__dessert").html(dessertsHtml);

    // replace yogourt by another dessert
    replaceDish('Yogourt', desserts, replacedDessert);
    replaceDish('Yogourt en tube', desserts, replacedDessert);
    var dessert = desserts[i];

    domElement = ".calendar__dessert:contains('%dessert%')";
    if (desserts[i] !== replacedDessert) {
      $(domElement).text(dessert);
    } else {
      addStyles(domElement);
      $(domElement).text(dessert);
    }

  } // end for loop calendarItems

  // remove the lettuce for Leo
  if ($(".student__name:contains('Leo')").length > 0) {

    $("li:contains('laitue')").text(function(index, text) {
      // $(this).css('font-weight', 'bold');
      $(this).css('background-color', '#fcf8e3');
      return text.replace('laitue', 'SANS laitue');
    });
  }




  // Display the total amount to pay
  const lunchPrice = 6.3;
  var totalToPay = totalAmount('.calendar__item', 2);
  // console.log(totalToPay);
  $('.amount__topay').text(totalToPay + ' CAD');


  // add an attribute to an html element
  function addHtmlAttr(el, attribute, item) {
    var attr = item + '__';
    $(el).attr(attribute, function(i) {
      return item + '__' + (i + 1);
    });

  } // end function addHtmlAttr()


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

  } // end getDaysInMonth()


  // remove DaysOff
  function removeDaysOff(str, arr) {
    var days = arr;
    // console.log('days dans fonction remove: ', days);
    var pos = arr.indexOf(str);
    // console.log('jour et index de la string: ', str + " " + pos);
    arr.splice(pos, 1);
  } // end removeDaysOff()


  // Replace dish
  function replaceDish(str, arr, dish) {

    var index = arr.indexOf(str);

    if (index !== -1) {
      arr[index] = dish;
    }

  } // end replaceDish()


  // Add background color to special indications
  function addStyles(el) {
    $(el).css({
      'background-color': '#d9edf7', // alert info color
    });
  } // end addStyles()


  // Calculate the total amount to pay
  function totalAmount(el, decimals) {
    var lunchesQty = $(el).length;
    // console.log(lunchesQty);
    return parseFloat(lunchPrice * lunchesQty).toFixed(decimals);
  }


  // TODO PAS ENCORE UTILISEE POUR AFFICHER SELECT
  // display the select element for desserts
  // var sel = $('<select>').appendTo('.calendar__dessert');
  // $(desserts2).each(function() {
  //  sel.append($("<option>").attr('value',this.val).text(this.text));
  // });

  // display select element
  // function displaySelect(arr, item) {
  //   // sort the array
  //   arr.sort();
  //
  //   //create the select element with an id
  //   var newSelect = $('<select>');
  //   var idSelect = 'select__' + item;
  //   // console.log(idSelect);
  //
  //   $('#demo').append(newSelect);
  //   $('select')
  //     .attr('id', idSelect)
  //     .attr('name', idSelect);
  //
  //   // create the select options with a value
  //   for (var i = 0; i < arr.length; i++) {
  //     var newOption = $('<option>');
  //     $('select').append(newOption);
  //
  //     // add the value attribute to each option
  //     addHtmlAttr('option', 'value', item);
  //
  //     // populate each option
  //     console.log(arr[i]);
  //     // $('option').text('toto');
  //
  //   }
  // } // end displaySelect()



}); // DOM ready
