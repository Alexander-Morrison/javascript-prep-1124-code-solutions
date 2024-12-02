/* exported reverse */

// The purpose of the reverse function is to create a new array and to populate it with all of the items from the array parameter but in reverse order then return the new array.

function reverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
