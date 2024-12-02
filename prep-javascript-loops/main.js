// WHILE LOOPS

/*
1. Define a function named whileLoop1:

- It takes no parameters.
- Within the function:
  - Create a new array.
  - Declare an index variable with an initial value of 0.
  - Use a while loop to add the numbers 0 - 9 to the new array.
    - This is best done by using the .push method on the new array to push the index variable value into the new array for each iteration of the loop.
    - Click here for a refresher on the push method.
- Return the new array.
*/

function whileLoop1() {
  newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}

/*
2. Test the whileLoop1 function:

- Define a new variable named whileLoop1Result.
- Call the whileLoop1 function and assign the return value to the whileLoop1Result variable.
- Log the whileLoop1Result variable to the console.
- Confirm the output is an array with the numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
*/

let whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

/*
3. Define a function named whileLoop2:

- It takes no parameters.
- Within the function:
  - Create a new array.
  - Declare an index variable with an initial value of 0.
  - Use a while loop to add the numbers 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 to the new array.
    - The loop should iterate 10 times total.
    - This is best done by using the .push method on the new array to push the index variable value into the new array for each iteration of the loop.
    - Incrementing the index variable by 2 for each iteration is helpful here.
  - Return the new array.
*/

function whileLoop2() {
  newArray2 = [];
  let index = 0;

  while (index < 20) {
    newArray2.push(index);
    index += 2;
  }
  return newArray2;
}

// Another way
function whileLoop3() {
  newArray3 = [];
  let index = 0;

  while (index < 20) {
    if (index % 2 === 0) {
      newArray3.push(index);
    }
    index++;
  }
  return newArray3;
}

/*
4. Test the whileLoop2 function:

- Define a new variable named whileLoop2Result.
- Call the whileLoop2 function and assign the return value to the whileLoop2Result variable.
- Log the whileLoop2Result variable to the console.
- Confirm the output is an array with the numbers 0, 2, 4, 6, 8, 10, 12, 14, 16, 18.
*/

let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

let whileLoop3Result = whileLoop3();
console.log(whileLoop3Result);

// FOR LOOPS

/*
1. Define a function named forLoop1:
    It takes no parameters.
Within the function:
    Create a new array.
    Use a for loop to add the numbers 0 - 9 to the new array.
    This is best done by using the .push method on the new array to push the index variable value into the new array for each iteration of the loop.
Return the new array.
*/

function forLoop1() {
  let newArray1 = [];
  for (let i = 0; i < 10; i++) {
    newArray1.push(i);
  }
  return newArray1;
}

/*
2. Test the forLoop1 function:
    Define a new variable named forLoop1Result.
    Call the forLoop1 function and assign the return value to the forLoop1Result variable.
    Log the forLoop1Result variable to the console.
    Confirm the output is an array with the numbers 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
*/

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

/*
3. Define a function named forLoop2:
    It takes no parameters.
Within the function:
    Use a for loop to log a countdown to the console.
    The index variable for the loop should start at 100 and decrease by 1 for each iteration of the loop.
    The loop should stop iterating once the index variable becomes 0.
    For each iteration of the loop, the string "Time to explosion: " should be concatenated with the current value of the index variable and logged to the console.
    No value is returned.
    This function does not return a value; it just logs the countdown messages to the console.
*/

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log(`Time to explosion: ${i}!`);
  }
}

/*
4. Test the forLoop2 function:
    Call the forLoop2 function.
    Confirm the 100 "Time to explosion" messages print to the console.
*/

const forLoop2Result = forLoop2();

// FOR .. IN LOOPS

// Define the following object:

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

// This object will be used to test the next two functions.

/*
1. Define a function named forInLoop1:
    It takes one parameter:
        object - a JavaScript object.
Within the function:
    Create a new array.
    Use a for...in loop to iterate through the object parameter and add all of the object's property names to the new array.
    This is best done by using the .push method on the new array to push the loop variable value into the new array for each iteration of the loop.
    Return the new array.
*/

function forInLoop1(human) {
  let humanAttributes = [];
  for (const key in human) {
    humanAttributes.push(key);
  }
  return humanAttributes;
}

/*
2. Test the forInLoop1 function:
    Define a new variable named forInLoop1Result.
    Call the forInLoop1 function with the person object as an argument and assign the return value to the forInLoop1Result variable.
    Log the forInLoop1Result variable to the console.
    Confirm the output is an array that contains the person object's property names.
*/

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

/*
3. Define a function named forInLoop2:
    It takes one parameter:
        object - a JavaScript object.
Within the function:
    Create a new array.
    Use a for...in loop to iterate through the object parameter and add all of the object's property values to the new array.
    This is best done by using the .push method on the new array.
    Unlike the previous loop, you won't just push the variable value to the new array;
    you will instead use the variable value to access the associated property value and push that into the new array for each iteration of the loop.
    Example:
    for (const key in object) {
        array.push(object[key]);
    }
    Return the new array.
*/

function forInLoop2(human) {
  let humanAttributes = [];
  for (const key in human) {
    humanAttributes.push(human[key]);
  }
  return humanAttributes;
}

/*
4. Test the forInLoop2 function:
    Define a new variable named forInLoop2Result.
    Call the forInLoop2 function with the person object as an argument and assign the return value to the forInLoop2Result variable.
    Log the forInLoop2Result variable to the console.
    Confirm the output is an array that contains the person object's property values.
*/

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
