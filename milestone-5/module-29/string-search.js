const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "Yellow laptop with black camera",
  "Dell 1X59 Lenovo laptop",
  "LG supernova laptop",
  "HTC low price phone",
  "Samsung phone with Laptop",
];
const searching = "dell";
const output = [];

// indexOf
// for (const product of products) {
//   if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//     // output.push(product);
//   }
// }
// // console.log(output);

// for (const product of products) {
//   if (product.toLowerCase().includes(searching.toLowerCase())) {
//     // output.push(product);
//   }
// }
// console.log(output);

// startWith
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase)) {
    output.push(product);
  }
}
console.log(output);
