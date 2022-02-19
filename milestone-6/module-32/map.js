const numbers = [4, 6, 8, 10];
const output = [];
for (const number of numbers) {
  const result = number * 2;
  output.push(result);
}
// console.log(output);

// using map
const doubleIt = (number) => number * 2;
const output2 = numbers.map(doubleIt);
console.log(output2);

//square
const squares = numbers.map((x) => x * x);
console.log(squares);
