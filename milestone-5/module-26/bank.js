function getInputValue(inputId) {
  const inputFeild = document.getElementById(inputId);
  const newInputText = inputFeild.value;
  const newAmount = parseFloat(newInputText);
  //   clear input feild
  inputFeild.value = "";
  return newAmount;
}
function updateTotalFeild(totalFeildId, newAmount) {
  const totalAmount = document.getElementById(totalFeildId);
  const previousAmountText = totalAmount.innerText;
  const previousAmount = parseFloat(previousAmountText);
  const totalNewAmount = previousAmount + newAmount;
  totalAmount.innerText = totalNewAmount;
}
// this is for deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposit
  // const depositInput = document.getElementById("deposit-amount");
  // const newDepositText = depositInput.value;
  // const newDepositAmount = parseFloat(newDepositText);
  const newDepositAmount = getInputValue("deposit-amount");

  //   get and update deposit total
  // const totalDeposit = document.getElementById("totalDeposit");
  // const previousDepositText = totalDeposit.innerText;
  // const previousDepositAmount = parseFloat(previousDepositText);
  // const totalNewDeposit = previousDepositAmount + newDepositAmount;
  // totalDeposit.innerText = totalNewDeposit;
  updateTotalFeild("totalDeposit", newDepositAmount);

  // update account balance
  const totalBalance = document.getElementById("totalBalance");
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  const totalNewBalance = previousTotalBalance + newDepositAmount;
  totalBalance.innerText = totalNewBalance;

  //   clear deposit input feild
  // depositInput.value = "";
});

// this is for withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the amount withdraw
  // const withdrawInput = document.getElementById("withdraw-amount");
  // const newWithdrawText = withdrawInput.value;
  // const newWithdrawAmount = parseFloat(newWithdrawText);

  const newWithdrawAmount = getInputValue("withdraw-amount");
  //   get and update withdraw total
  // const totalWithdraw = document.getElementById("totalWithdraw");
  // const previousWithdrawText = totalWithdraw.innerText;
  // const previousWithdrawAmount = parseFloat(previousWithdrawText);
  // const totalNewWithdraw = previousWithdrawAmount + newWithdrawAmount;
  // totalWithdraw.innerText = totalNewWithdraw;
  updateTotalFeild("totalWithdraw", newWithdrawAmount);

  // update account balance
  const totalBalance = document.getElementById("totalBalance");
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  const totalNewBalance = previousTotalBalance - newWithdrawAmount;
  totalBalance.innerText = totalNewBalance;

  //   clear whithdraw input feild
  // withdrawInput.value = "";
});
