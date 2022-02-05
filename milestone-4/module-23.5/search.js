const products = [
  { name: "iphone 14", price: 120000 },
  { name: "samsung galaxy 14", price: 90000 },
  { name: "realme x50", price: 27000 },
  { name: "dell laptop", price: 50000 },
  { name: "lenovo yoga", price: 55000 },
  { name: "asus", price: 35000 },
  { name: "smart watch samsung", price: 7000 },
  { name: "apple watch", price: 20000 },
  { name: "one plus", price: 35000 },
];
function searchProducts(products, seartchText) {
  const result = [];
  for (const product of products) {
    if (product.name.includes(seartchText)) {
      result.push(product);
    }
  }
  return result;
}
const matched = searchProducts(products, "watch");
console.log(matched);
