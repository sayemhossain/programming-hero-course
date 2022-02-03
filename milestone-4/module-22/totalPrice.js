const cart = [
  { name: "laptop", price: 45232, quantity: 1 },
  { name: "shirt", price: 500, quantity: 5 },
  { name: "watch", price: 4344, quantity: 1 },
  { name: "phone", price: 25322, quantity: 1 },
];

// let totalPrice = 0;
// for (const product of products) {
//   totalPrice = totalPrice + product.price;
// }

let cartTotal = 0;
for (const product of cart) {
  const productTotal = product.price * product.quantity;
  cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
