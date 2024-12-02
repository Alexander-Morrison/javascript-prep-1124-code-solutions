/* exported getKeys */

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
getKeys(tim); // -> []
*/

function getKeys(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

// console.log(getKeys(dave)); // -> ["firstName", "lastName"]
// console.log(getKeys(learningfuze)); // -> ["latitude", "attitude", "longitude"]
// console.log(getKeys(tim)); // -> []
