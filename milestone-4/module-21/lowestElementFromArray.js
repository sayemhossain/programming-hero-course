function lowestElement(numbers) {
  var lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}
const ages = [23, 35, 97, 63, 34];

const oldest = lowestElement(ages);
const oldest2 = lowestElement([-3, -9, -34]);
console.log(oldest, oldest2);
