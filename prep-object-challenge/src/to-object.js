/* exported toObject */

function toObject(keyValuePair) {
  let newObject = {};

  newObject[keyValuePair[0]] = keyValuePair[1];

  return newObject;
}

console.log(toObject(['firstName', 'David'])); // -> { firstName: "David" }
console.log(toObject(['isCool', true])); // -> { isCool: true });
console.log(toObject(['employer', 'LearningFuze'])); // -> { employer: "LearningFuze" });
