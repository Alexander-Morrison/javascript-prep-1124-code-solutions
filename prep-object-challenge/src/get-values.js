/* exported getValues */

/*
const dave = {
  firstName: 'David',
  lastName: 'Thomas',
};

const learningfuze = {
  latitude: 33.6349,
  attitude: 'sanguine',
  longitude: 117.7405,
};

const tim = {};
getValues(tim); // -> []
*/

function getValues(object) {
  let newArray = [];
  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}

/*
console.log(getValues(dave)); // -> ["David", "Thomas"] ✅
console.log(getValues(learningfuze)); // -> [33.6349, "sanguine", 117.7405] ✅
console.log(getValues(tim)); // -> []
*/
