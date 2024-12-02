/* exported isLowerCased */

function isLowerCased(word) {
  let lowerCased = word.toLowerCase();
  if (word === lowerCased) {
    return true;
  } else {
    return false;
  }
}
console.log(isLowerCased('alexander'));
