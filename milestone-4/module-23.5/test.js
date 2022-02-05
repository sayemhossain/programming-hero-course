// function compare(a, b) {
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const result = compare(15, "15");
// console.log(result);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}
