// for get all input field value
function getValueFromInput(id) {
  // for agent number
  const input = document.getElementById(id);
  const value = input.value;
  //   console.log(id, ":", value);
  return value;
}

// for get current balance
function getCurrentBalance() {
  const currentBalanceElement = document.getElementById("balance");
  const currentBalance = currentBalanceElement.innerText;
  console.log("Current Balance : ", currentBalance);
  return Number(currentBalance);
}

// for set balance (minus kore current balance dekhar jonno)
function setBalance(value) {
  const currentBalanceElement = document.getElementById("balance");
  currentBalanceElement.innerText = value;
  console.log(currentBalanceElement.innerText);
}
