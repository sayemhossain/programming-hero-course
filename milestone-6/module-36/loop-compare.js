/*
for of-----array
for in-----object
*/

const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};
for (const prop in bottle) {
  //   console.log(prop);
}

// object compareing
const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

// 1st using stringify
if (JSON.stringify(first) == JSON.stringify(second)) {
  //   console.log("Object are qual");
} else {
  //   console.log("Object are not equal");
}

// 2nd using function
function objecctCompare(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}
const isEqual = objecctCompare(first, second);
console.log(isEqual);
