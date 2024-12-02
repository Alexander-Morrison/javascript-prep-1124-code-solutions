/* exported isVowel */

function isVowel(char) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}

//console.log(isVowel("F"));
