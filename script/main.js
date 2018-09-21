// mon Lunch main js

'use strict';
$(document).ready(function() {
  console.log('DOM is ready');


// display the current month and year
var currentMonth, currentYear, currentStudent;
currentMonth = 'Octobre';
currentYear = '2018';

$('.heading__month').text(currentMonth);
$('.heading__year').text(currentYear);

// Student Constructor
function Student(firstName, lastName, schoolYear, school){
  this.firstName = firstName,
  this.lastName = lastName,
  this.schoolYear = schoolYear,
  this.school = school
}
// define students
var student01 = new Student('Gael', 'Gonzalez Bastide', '3ème', 'Ecole Ile des Soeurs');
var student02 = new Student('Leo', 'Gonzalez Bastide', '3ème', 'Ecole Ile des Soeurs');

// display info current student
$('.student__name').text(student01.firstName + ' ' + student01.lastName);
$('.student__schoolYear').text(student01.schoolYear);
$('.student__school').text(student01.school);



}); // DOM ready
