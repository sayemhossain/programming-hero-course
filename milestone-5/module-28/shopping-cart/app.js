function productUpdateNumber(product, isIncreasing, price) {
  const productinput = document.getElementById(product + "-number");
  let productNumber = parseInt(productinput.value);

  if (isIncreasing == true) {
    productNumber = parseInt(productinput.value) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productinput.value) - 1;
  }
  productinput.value = productNumber;

  const addPrice = document.getElementById(product + "-price");
  addPrice.innerText = productNumber * price;
}
// this is for phone
document.getElementById("phone-plus").addEventListener("click", function () {
  productUpdateNumber("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  productUpdateNumber("phone", false, 1219);
});
// this is for case
document.getElementById("case-plus").addEventListener("click", function () {
  productUpdateNumber("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  productUpdateNumber("case", false, 59);
});
