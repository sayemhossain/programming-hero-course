const user = {
  id: 1251,
  name: "sayem hossain",
  job: "web developer",
};

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  name: "Alia store",
  address: "dhanmondi",
  profit: 15000,
  products: ["laptop", "mobile", "pepsi"],
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
