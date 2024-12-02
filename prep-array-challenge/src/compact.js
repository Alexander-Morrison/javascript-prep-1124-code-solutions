/* exported compact */

// The purpose of the compact function is to create a new array, and populate it with all of the truthy values from the array parameter.

function compact(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
