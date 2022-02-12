function productUpdateNumber(product, isIncreasing) {
  const productinput = document.getElementById(product + "-number");
  const productNumber = parseInt(productinput.value);

  if (isIncreasing == true) {
    productinput.value = parseInt(productinput.value) + 1;
  } else if (productNumber > 0) {
    productinput.value = parseInt(productinput.value) - 1;
  }
}
// this is for phone
document.getElementById("phone-plus").addEventListener("click", function () {
  productUpdateNumber("phone", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  productUpdateNumber("phone", false);
});
// this is for case
document.getElementById("phone-plus").addEventListener("click", function () {
  productUpdateNumber("phone", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  productUpdateNumber("phone", false);
});
