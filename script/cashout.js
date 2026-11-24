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
  const currentBalance = getCurrentBalance();
  console.log(currentBalance);
  // console.log("Current Balance : ", cBalanceValue);

  // calculate the new balance
  const newBalance = currentBalance - Number(amount);
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
    setBalance(newBalance);
  } else {
    // alternation error message for not valied pin
    alert("Invalid Pin");
    return;
  }
});
