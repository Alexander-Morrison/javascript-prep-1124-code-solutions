/* exported getWords */

function getWords(string) {
  let newArray = string.split(' ');
  if (string.length > 0) {
    return newArray;
  } else {
    return [];
  }
}

console.log(getWords(''));
