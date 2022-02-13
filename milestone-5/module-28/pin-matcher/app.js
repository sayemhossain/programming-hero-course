document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = parseInt(Math.random() * 9000 + 900);
  document.getElementById("pin-feild").value = pin;
});
document.getElementById("number").addEventListener("click", function (event) {
  const typedNumber = event.target.innerText;
  document.getElementById("number-feild").value = typedNumber;
});
