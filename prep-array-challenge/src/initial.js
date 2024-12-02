/* exported initial */

// The purpose of the initial function is to create a new array which contains all of the values from the array parameter except the last value and to return the new array.

function initial(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
