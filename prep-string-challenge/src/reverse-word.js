/* exported reverseWord */

function reverseWord(word) {
  // make sure to initialize string or will get undefined combined with your
  // return
  let newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

// console.log(reverseWord("alexander"));
