const name = "ami";
// // TypeError
// name = "tumi";
// console.log(name);
// // SyntaxError
// for(let i=0;i<10 i++){

// }

try {
  name = "tumi";
} catch (error) {
  console.log(error);
}
console.log(name);
