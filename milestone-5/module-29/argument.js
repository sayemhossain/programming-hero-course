function addNumber(num1, num2) {
  // console.log(arguments[1]);
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }
  // const result = num1 + num2;
  return result;
}
const sum = addNumber(23, 13, 50, 100, 420);
// console.log(sum);

function getFullName(firstName, lastName) {
  let fullName = "";
  for (const part of arguments) {
    fullName = fullName + part + " ";
  }
  return fullName;
}
console.log(getFullName("AKA", "Abul", "Klam", "Azad"));
