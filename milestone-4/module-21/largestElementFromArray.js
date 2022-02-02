function largestElement(numbers) {
  var largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const ages = [23, 35, 97, 63, 34];

const oldest = largestElement(ages);
const oldest2 = largestElement([-3, -9, -34]);
console.log(oldest, oldest2);
