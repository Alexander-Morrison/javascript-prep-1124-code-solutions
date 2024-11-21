//    alert('connected as expected');

// 4. Declare two variables named number1, number2:
let number1;
let number2;

//    Assign number1 and number2 numeric values.
number1 = 1;
number2 = 2;

//    Declare a new variable named product and assign it the product
//    of multiplying the number1 and number2 variables together.
const product = number1 * number2;

//    Log the value of the product variable to the console.
console.log(`value of product: ${product}`);

//    Log the data type of the product variable to the console.
console.log(`typeof product: ${typeof product}`);

//    an extra space for readability
console.log('');

// 5. Declare two variables named charge and payment:
let charge;
let payment;

//    Assign charge and payment numeric values.
charge = 20.0;
payment = 18.2;

//    Payment should be a smaller numeric value than charge.

//    Declare a new variable named amountRemaining and assign it the
//    difference between the payment and charge variables using subtraction.
let amountRemaining = charge - payment;

//    Log the value of the amountRemaining variable to the console.
console.log(`value of amountRemaining: ${amountRemaining.toFixed(2)}`);

//    Log the data type of the amountRemaining variable to the console.
console.log(`typeof amoundRemaining: ${typeof amountRemaining}`);

console.log('');

// 6. Declare three variables named tests, assignments, and final:
let tests;
let assignments;
let final;

//    Assign each of the variables a numeric value.
tests = 100;
assignments = 70;
final = 200;

//    Declare a new variable named grade and assign it the average
//    of the tests, assignments, and final variables.
//    Hint: () parenthesis can be used to group sub-expressions.
let grade = (tests + assignments + final) / 3;

//    Log the value of the grade variable to the console.
console.log(`value of grade: ${grade.toFixed(2)}`);

//    Log the data type of the grade variable to the console.
console.log(`typeof grade: ${typeof grade.toFixed(2)}`);

console.log('');

// 7. Declare two variables named firstName and lastName:
let firstName;
let lastName;

//    Assign each of the variables strings for your first and last name,
//    respectively.
firstName = 'Alexander';
lastName = 'Morrison';

//    Declare a new variable named fullName and assign it the values of
//    the firstName and lastName variables concatenated together.
//    Be sure to include a space!
let fullName = firstName + ' ' + lastName;

//    Log the value of the fullName variable to the console.
console.log(`value of fullName: ${fullName}`);

//    Log the data type of the fullName variable to the console.
console.log(`typeof fullName: ${typeof fullName}`);

console.log('');

// 8. Declare a variable named pH:
let pH;

//    Assign it a numeric value.
pH = 8.9;

//    Declare a new variable named isAcidic and assign it the result
//    of an expression that checks if the value of the ph variable is
//    less-than 7
let isAcidic = pH < 7;

//    Something is considered acidic if its pH level is below 7.

//    Log the value of the isAcidic variable to the console.
console.log(`value of isAcidic: ${isAcidic}`);

//    Log the data type of the isAcidic variable to the console.
console.log(`typeof isAcidic: ${typeof isAcidic}`);

console.log('');

// 9. Declare a variable named numberOfSoldiers:
let numberOfSoldiers;

//    Assign it a number value.
numberOfSoldiers = 12000;

//    Declare a new variable named isSparta and assign it the result of an
//    expression that performs a strict equality comparison between
//    numberOfSoldiers and the number 300.
let isSparta = numberOfSoldiers === 300;

//    Sparta had 300 soldiers in the battle of Thermopylae.
//    Log the value of the isSparta variable to the console.
console.log(`value of isSparta: ${isSparta}`);

//    Log the data type of the isSparta variable to the console.
console.log(`typeof isSparta: ${typeof isSparta}`);

console.log('');

// 10. Declare a let variable named nickname and assign it the value stored in
//     the fullName variable you created earlier:
let nickname = fullName;

//     Use the addition assignment operator to concatenate the string ' is the
//     GOAT' onto the current value of the nickname variable and assign the
//     result back in nickname.
//     Don't forget the space!
nickname += ' is the GOAT';

//     Log the value of the nickname variable to the console.
console.log(`value of nickname: ${nickname}`);

//     Log the data type of the nickname variable to the console.
console.log(`typeof nickname: ${typeof nickname}`);
