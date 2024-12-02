const isAdult = (age) => {
  if (age >= 18) {
    return true;
  }
  return false;
};

let isAdultResult;
isAdultResult = isAdult(20);

console.log(isAdultResult); // Expected output: true
console.log(isAdult(17)); // Expected output: false
console.log(isAdult(18)); // Expected output: true
console.log(isAdult(15)); // Expected output: false
console.log(isAdult(30)); // Expected output: true

console.log(' ');

const didStudentPass = (score) => {
  if (score >= 70) {
    return true;
  }
  return false;
};

let didStudentPassResult = didStudentPass(90);
console.log(didStudentPassResult); // Expected output: true
console.log(didStudentPass(20)); // Expected output: false
console.log(didStudentPass(70)); // Expected output: true

console.log(' ');

const gradeCalculator = (score) => {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
};

let gradeCalculatorResult = gradeCalculator(100);

console.log(gradeCalculatorResult);
// Test with different values
gradeCalculatorResult = gradeCalculator(55);
console.log(gradeCalculatorResult); // Expected output: 'F'

gradeCalculatorResult = gradeCalculator(65);
console.log(gradeCalculatorResult); // Expected output: 'D'

gradeCalculatorResult = gradeCalculator(75);
console.log(gradeCalculatorResult); // Expected output: 'C'

gradeCalculatorResult = gradeCalculator(85);
console.log(gradeCalculatorResult); // Expected output: 'B'

gradeCalculatorResult = gradeCalculator(95);
console.log(gradeCalculatorResult); // Expected output: 'A'

gradeCalculatorResult = gradeCalculator(105);
console.log(gradeCalculatorResult); // Expected output: 'A++'

console.log(' ');

/*
Define a function named seasonMessenger:

it takes a single parameter
season - a string value
within the function:
return the string 'it is hot today' if the value of season is strictly equal to 'summer'
return the string 'the flowers are blooming' if the value of season is strictly equal to 'spring'
return the string 'the leaves are changing colors' if the value of season is strictly equal to 'autumn'
return the string 'it is cold today' if the value of season is strictly equal to 'winter'
return the string 'please enter a valid season' if the value of season is not one of the above values

Test the seasonMessenger function:

define a new variable named seasonMessengerResult

call the seasonMessenger function with an appropriate argument value and assign the return value to the seasonMessengerResult variable

log the seasonMessengerResult variable to the console

confirm the output is correct based on the argument you passed to the function
it should be a string value
test the function with multiple values to confirm it is working properly before moving on to the next function
*/

const seasonMessenger = (season) => {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
};

let seasonMessengerResult = seasonMessenger('winter');

console.log(seasonMessengerResult);
console.log(seasonMessenger('summer'));
console.log(seasonMessenger('autumn'));
console.log(seasonMessenger('spring'));
console.log(seasonMessenger('fall'));

console.log(' ');

/*
Define a function named dayDetector:

it takes a single parameter
dayOfTheWeek - a string value
within the function:
return the string 'have a good weekend' if the value of dayOfTheWeek is strictly equal to either 'saturday' or 'sunday'
Do this using the logical or operator. See example in if statement.
return the string 'It is a weekday!' if the value of dayOfTheWeek is any other value
*/

const dayDetector = (dayOfTheWeek) => {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
};

/*
Test the dayDetector function:

define a new variable named dayDetectorResult

call the dayDetector function with an appropriate argument value and assign the return value to the dayDetectorResult variable

log the dayDetectorResult variable to the console

confirm the output is correct based on the argument you passed to the function
it should be a string value
test the function with multiple values to confirm it is working properly before moving on to the next function
*/

let dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult);
console.log(dayDetector('sunday'));
console.log(dayDetector('tuesday'));
