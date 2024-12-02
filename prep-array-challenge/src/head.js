/* exported head */

function head(array) {
  // JavaScript console error: Uncaught TypeError: Cannot read properties of undefined (reading '0')
  // Fix: Check if array has elements, otherwise return undefined.
  if (array.length > 0) {
    return array[0];
  }
  return undefined;
}
