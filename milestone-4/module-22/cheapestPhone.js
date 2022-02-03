const phones = [
  { name: "samsung s5", price: 45000, camera: 10, storage: 32 },
  { name: "walton m32", price: 5000, camera: 8, storage: 16 },
  { name: "mi a2", price: 17000, camera: 20, storage: 32 },
  { name: "realme x50", price: 27000, camera: 64, storage: 64 },
  { name: "nokia n95", price: 8000, camera: 5, storage: 8 },
];

let cheapest = phones[0];
for (const phone of phones) {
  // compare only price
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
