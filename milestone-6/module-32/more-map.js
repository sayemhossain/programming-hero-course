const friends = ["badhon", "nayan", "shanto", "utsho", "ullash"];
const fLenghts = friends.map((friend) => friend.length);
// console.log(fLenghts);
const products = [
  { name: "water bottle", price: 50, color: "tellow" },
  { name: "mobile", price: 15000, color: "black" },
  { name: "smart watch", price: 1300, color: "pink" },
  { name: "sticky", price: 30, color: "white" },
  { name: "water glass", price: 10, color: "blue" },
];
const productName = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);
products.map((product) => console.log(product));
console.log(productName);
console.log(productPrices);
