const products = [
  { name: "iphone 14", price: 120000 },
  { name: "samsung galaxy 14", price: 90000 },
  { name: "realme x50", price: 27000 },
  { name: "dell laptop", price: 50000 },
  { name: "lenovo yoga", price: 55000 },
  { name: "asus", price: 35000 },
  { name: "smart watch samsung", price: 4000 },
  { name: "apple watch", price: 20000 },
  { name: "one plus", price: 35000 },
];
for (const product of products) {
  //   if (product.price < 5000) {
  //     break;
  //   }
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
