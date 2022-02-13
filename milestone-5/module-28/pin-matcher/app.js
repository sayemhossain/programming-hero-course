document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = parseInt(Math.random() * 9000 + 900);
  document.getElementById("pin-feild").value = pin;
});
document.getElementById("number").addEventListener("click", function (event) {
  const newNumber = event.target.innerText;
  let typedNumber = document.getElementById("number-feild");
  const previousNumber = typedNumber.value;
  typedNumber.value = previousNumber + newNumber;
});
