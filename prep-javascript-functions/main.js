// prep-javascript-functions

// Add Two Numbers
// 1. Define a function named addTwoNumbers
// 2. This function has two parameters:
// num1 - which will receive a number as an argument.
// num2 - which will receive another number as an argument.

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log(sum);

// convertHoursToMinutes
// 1. Define a function named convertHoursToMinutes.
// 2. This function has a single parameter:
// hours - which will receive a number as an argument.

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log(minutes);

// getGreeting
// 1. Define a function named getGreeting.
// This function has a single parameter:
// name - which will receive a string as an argument.

function getGreeting(name) {
  return `Hello ${name}!`;
}

const greeting = getGreeting('World');
console.log(greeting);

// addAndMultiplyBy5
// 1. Define a function named addAndMultiplyBy5
// This function has two parameters:
// num1 - which will receive a number as an argument
// num2 - which will receive a number as an argument

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(sumTimesFive);

// multiplyAndDivideBy5
// 1. Define a function named multiplyAndDivideBy5
// This function takes two parameters:
// num1 - which will receive a number as an argument
// num2 - which will receive a number as an argument

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive);

// subtractTwoNumbers
// 1. Define a function named subtractTwoNumbers
// This function has two parameters:
// num1 - which will receive a number as an argument
// num2 - which will receive a number as an argument

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(22, 7);
console.log(difference);

// getCircleCircumference
// 1. Define a function named getCircleCircumference
// This function has one parameter:
// radius - which will receive a number as an argument

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}

const circumference = getCircleCircumference(5);
console.log(circumference);

// getFullName
// 1. Define a function named getFullName
// This function has two parameters:
// firstName - which will receive a string as an argument
// lastName - which will receive a string as an argument

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

// cube
// 1. Define a function named cube
// This function has one parameter:
// number - which will receive a number as an argument

function cube(number) {
  return number * number * number;
}

const cubed = cube(5);
console.log(cubed);
