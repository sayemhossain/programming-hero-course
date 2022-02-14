function addNumber(num1, num2) {
  console.log(arguments);
  const result = num1 + num2;
  return result;
}
const sum = addNumber(23, 13, 50, 100);
console.log(sum);
