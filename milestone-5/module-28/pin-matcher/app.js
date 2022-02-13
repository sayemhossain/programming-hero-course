document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = parseInt(Math.random() * 9000 + 900);
  document.getElementById("pin-feild").value = pin;
});
