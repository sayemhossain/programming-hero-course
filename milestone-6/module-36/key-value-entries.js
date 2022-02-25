const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};
// getting all keys
const keys = Object.keys(bottle);
// console.log(keys);

// getting all value
const values = Object.values(bottle);
// console.log(values);

// getting keys and values at a time
const pairs = Object.entries(bottle);
console.log(pairs);
