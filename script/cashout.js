// console.log("cashout file connected");
document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1-> get the agent number & validate
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumberValue = cashoutNumberInput.value;
  console.log(cashoutNumberValue);
  // 2-> get the amount
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmountValue = cashoutAmountInput.value;
  console.log(cashoutAmountValue);
  // 3-> get the current balance
  const balanceTextEelment = document.getElementById("balance");
  const currentBalance = balanceTextEelment.innerText;
  console.log(currentBalance);
  // 4-> calculate new balance
  const newBalance = Number(currentBalance) - Number(cashoutAmountValue);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  console.log("new balance : ", newBalance);
  //   balanceTextEelment.innerText = newBalance;
  // 5-> get the pin and verify
  const cashoutPinInput = document.getElementById("cashout-pin");
  const cashoutPinValue = cashoutPinInput.value;
  console.log(cashoutPinValue);
  if (cashoutPinValue === "1234") {
    // 5:1-> true :: show an success alert > set balance
    alert("Cash Out Successfully!");
  } else {
    // 5:2-> false :: show an error alert > return
    alert("Invalid Pin Number");
    return;
  }
});
