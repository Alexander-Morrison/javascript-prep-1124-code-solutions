// Defining Arrays

// 1. Define a new variable named languages:
let languages;

// Assign it an array with the following six string values:
languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];

// Log the languages variable to the console
console.log('languages array', languages);
console.log(' ');

// Accessing Values in Arrays

// 1. Declare a new variable named firstElement:
let firstElement;

// Assign it the value of the first index of the languages variable.
firstElement = languages[0];

// Log the value of your firstElement variable.
console.log('the first element of the array is', firstElement);

// 2. Declare a variable named thirdElement:
let thirdElement;

// Assign it the value of the third element of the languages array.
thirdElement = languages[2];

// Log the thirdElement variable to confirm you have selected the proper value.
console.log('the third element of the arry is', thirdElement);

// The Length Property

// 1. Declare a variable named length:
let length;

// Assign it the length of the languages array.
length = languages.length;

// Log the length variable to confirm it contains the proper value.
console.log('The length of the array is', length);

// 2. Declare a variable named lastElement:
let lastElement;
// Assign it the value contained in the last index of the languages array using the
// length variable you just created in the previous step.

lastElement = languages[length - 1];
// Hint: Remember that the length of an array is always 1 number higher than its final
// index value because array indexes start with 0.

// Log the lastElement variable to confirm it contains the proper value.
console.log('the last element of the array is', lastElement);
