/* exported capitalize */

/*
function capitalize(string) {
  let capitalFirst;
  let restOfWord = "";
  
  if (string.length > 0) {
    capitalFirst = string[0];
    for (let i = 1; i < string.length; i++) {
      restOfWord += string[i];
    }
  }
  
  return capitalFirst.toUpperCase() + restOfWord.toLowerCase();
}

console.log(capitalize("alexander"));
*/

function capitalize(string) {
  const capitalFirst = string[0].toUpperCase();
  const restOfWord = string.slice(1).toLowerCase();
  const capitalizedName = capitalFirst + restOfWord;
  return capitalizedName;
}

// console.log(capitalize("aLeXanDEr"));
