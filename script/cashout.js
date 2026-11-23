document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1-> get the agent number & validate
  const agNum = getValueFromInput("cashout-number");
  // console.log(agNum);

  // for agent number validation
  if (agNum.length != 11) {
    alert("Invalid Agent Mobile");
    return;
  }
  // 2-> get the amount
  const amount = getValueFromInput("cashout-amount");
  // console.log(amount);

  // 3-> get the current balance
  const cBalanceElement = document.getElementById("balance");
  const cBalanceValue = cBalanceElement.innerText;
  // console.log("Current Balance : ", cBalanceValue);

  // calculate the new balance
  const newBalance = Number(cBalanceValue) - Number(amount);
  // validation for new balance
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 5-> get the pin and verify
  const pin = getValueFromInput("cashout-pin");
  // console.log("Input Pin : ", pin);

  // validation for pin
  if (pin === "1234") {
    // check pin validation
    alert("Cashout Successfully");
    // console.log("New Balance : ", newBalance);
    cBalanceElement.innerText = newBalance;
  } else {
    // alternation error message for not valied pin
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 1-> get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumberValue = cashoutNumberInput.value;
//   console.log(cashoutNumberValue);
//   if (cashoutNumberValue.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }
//   // 2-> get the amount
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmountValue = cashoutAmountInput.value;
//   console.log(cashoutAmountValue);
//   // 3-> get the current balance
//   const balanceTextEelment = document.getElementById("balance");
//   const currentBalance = balanceTextEelment.innerText;
//   console.log(currentBalance);
//   // 4-> calculate new balance
//   const newBalance = Number(currentBalance) - Number(cashoutAmountValue);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   // 5-> get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPinValue = cashoutPinInput.value;
//   console.log(cashoutPinValue);
//   if (cashoutPinValue === "1234") {
//     // 5:1-> true :: show an success alert > set balance
//     alert("Cash Out Successfully!");
//     console.log("new balance : ", newBalance);
//     balanceTextEelment.innerText = newBalance;
//   } else {
//     // 5:2-> false :: show an error alert > return
//     alert("Invalid Pin Number");
//     return;
//   }
// });
