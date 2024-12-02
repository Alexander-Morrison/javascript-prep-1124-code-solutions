/* exported isUpperCased */

function isUpperCased(word) {
  let upcased = word.toUpperCase();
  if (word === upcased) {
    return true;
  } else {
    return false;
  }
}

// console.log(isUpperCased("alexander"));
