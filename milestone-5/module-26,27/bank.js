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

function getCurrentBalance() {
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  return previousTotalBalance;
}

function updateBalance(newAmount, isAdd) {
  const totalBalance = document.getElementById("totalBalance");
  // const previousTotalBalanceText = totalBalance.innerText;
  // const previousTotalBalance = parseFloat(previousTotalBalanceText);
  const previousTotalBalance = getCurrentBalance();
  if (isAdd == true) {
    const totalNewBalance = previousTotalBalance + newAmount;
    totalBalance.innerText = totalNewBalance;
  } else {
    const totalNewBalance = previousTotalBalance - newAmount;
    totalBalance.innerText = totalNewBalance;
  }
}
// this is for deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit-amount");
  if (newDepositAmount > 0) {
    updateTotalFeild("totalDeposit", newDepositAmount);
    updateBalance(newDepositAmount, true);
  }
  // get the amount deposit
  // const depositInput = document.getElementById("deposit-amount");
  // const newDepositText = depositInput.value;
  // const newDepositAmount = parseFloat(newDepositText);

  //   get and update deposit total
  // const totalDeposit = document.getElementById("totalDeposit");
  // const previousDepositText = totalDeposit.innerText;
  // const previousDepositAmount = parseFloat(previousDepositText);
  // const totalNewDeposit = previousDepositAmount + newDepositAmount;
  // totalDeposit.innerText = totalNewDeposit;

  // update account balance
  // const totalBalance = document.getElementById("totalBalance");
  // const previousTotalBalanceText = totalBalance.innerText;
  // const previousTotalBalance = parseFloat(previousTotalBalanceText);
  // const totalNewBalance = previousTotalBalance + newDepositAmount;
  // totalBalance.innerText = totalNewBalance;

  //   clear deposit input feild
  // depositInput.value = "";
});

// this is for withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputValue("withdraw-amount");
  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
    updateTotalFeild("totalWithdraw", newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  }
  if (newWithdrawAmount > currentBalance) {
    alert("You don't have enough money..!");
  }
  // get the amount withdraw
  // const withdrawInput = document.getElementById("withdraw-amount");
  // const newWithdrawText = withdrawInput.value;
  // const newWithdrawAmount = parseFloat(newWithdrawText);

  //   get and update withdraw total
  // const totalWithdraw = document.getElementById("totalWithdraw");
  // const previousWithdrawText = totalWithdraw.innerText;
  // const previousWithdrawAmount = parseFloat(previousWithdrawText);
  // const totalNewWithdraw = previousWithdrawAmount + newWithdrawAmount;
  // totalWithdraw.innerText = totalNewWithdraw;

  // update account balance
  // const totalBalance = document.getElementById("totalBalance");
  // const previousTotalBalanceText = totalBalance.innerText;
  // const previousTotalBalance = parseFloat(previousTotalBalanceText);
  // const totalNewBalance = previousTotalBalance - newWithdrawAmount;
  // totalBalance.innerText = totalNewBalance;

  //   clear whithdraw input feild
  // withdrawInput.value = "";
});
