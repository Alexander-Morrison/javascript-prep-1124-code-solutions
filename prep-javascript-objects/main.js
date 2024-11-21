// 1. Declare a variable named person and assign it an object literal
//    with the following three properties: firstName, lastName, and hobby
let firstName;
let lastName;
let hobby;

//    Assign each of the properties an appropriate string value.

const person = {
  firstName: 'Bob',
  lastName: 'Johnson',
  hobby: 'swimming',
};

//    Log the the person variable to the console and confirm that your object
//    has a structure similar to the example output:
console.log(person);
console.log(' ');

// 2. Declare a variable named fullName:
let fullName;

//    Assign it a concatenated string which includes the values stored in the
//    firstName and lastName properties of the person object.
//    Make sure to include a space between the first and last names.
fullName = person.firstName + ' ' + person.lastName;

//    Log the value of the fullName variable to the browser console and confirm
//    the string matches the format of the example output.
console.log(`The person's name is: ${fullName}.`);
console.log(' ');

// 3. Add a new property named job to the person object using dot notation
person.job;

//    Assign it an appropriate string value.
person.job = 'Software Developer';

//    Log the value stored in the job property to the browser console with an
//    appropriate label using dot notation.
console.log(`The person's current job is: ${person.job}.`);
console.log(' ');

// 4. Add another property to the person object named previousJob using
//    bracket notation:
person['previousJob'];

//    Assign it an appropriate string value.
person['previousJob'] = 'Lawyer';

//    Log the value stored in the previousJob property to the console with an
//    appropriate label using bracket notation.
console.log(`The person's previous job was: ${person.previousJob}.`);
console.log(' ');

// 5. Log the person object to the console and expand it to get a complete view
//    of all of the object's properties.
//
//    It is very important to console log the data structures you create in your
//    code as you create them. Knowing what data you have available is one of
//    the most critical aspects of development.

console.log('The complete person object: ');
console.log(person);
