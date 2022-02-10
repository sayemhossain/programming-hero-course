document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposit
  const depositInput = document.getElementById("deposit-amount");
  const newDepositAmount = depositInput.value;
  //   showing in deposit
  const totalDeposit = document.getElementById("totalDeposit");
  const previousDepositAmount = totalDeposit.innerText;
  // add money
  const totalNewDeposit =
    parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  totalDeposit.innerText = totalNewDeposit;
  //   clear deposit input feild
  depositInput.value = "";
});
