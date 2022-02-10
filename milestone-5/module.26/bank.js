document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposit
  const depositInput = document.getElementById("deposit-amount");
  const depositeAmount = depositInput.value;
  //   showing in deposit
  document.getElementById("totalDeposit").innerText = depositeAmount;
  //   clear deposit input feild
  depositInput.value = "";
});
