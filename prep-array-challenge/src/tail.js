/* exported tail */

// The purpose of the tail function is to create a new array which contains all of the values from the array parameter except the first value and to return the new array.

// First return all values.
// single out first value.
// create new array without first value?

function tail(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
