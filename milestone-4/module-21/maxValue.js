var a = 134;
var b = 534;
var c = 93;
// if (a > b) {
//   console.log("a is big");
// } else {
//   console.log("b is big");
// }

// if (a > b && a > c) {
//   console.log("a is bigger");
// } else if (b > a && b > c) {
//   console.log("b is bigger");
// } else {
//   console.log("c is bigger");
// }

// var max = Math.max(a, b, c);
// console.log(max);

function findMax(a, b, c) {
  //   if (a > b) {
  //     console.log("a is bigger");
  //   } else {
  //     console.log("b is bigger");
  //   }
  var max = Math.max(a, b, c);
  console.log("max " + max);

  var min = Math.min(a, b, c);
  console.log("min " + min);
}
findMax(a, b, c);
