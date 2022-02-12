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

  calculatePrice();
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
function calculatePrice() {
  const phonePrice = document.getElementById("phone-price").innerText;
  const casePrice = document.getElementById("case-price").innerText;
  // calculate subtotal
  const subTotal = parseInt(phonePrice) + parseInt(casePrice);
  //calculate tax
  const tax = subTotal / 10;
  // total price
  const totalPrice = subTotal + tax;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

// removing items
function removeItems(product) {
  document.getElementById(product + "-item").style.display = "none";
}
document.getElementById("remove-phone").addEventListener("click", function () {
  removeItems("phone");
});
document.getElementById("remove-case").addEventListener("click", function () {
  removeItems("case");
});
