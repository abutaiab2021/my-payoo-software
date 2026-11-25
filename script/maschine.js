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
  // console.log("Current Balance : ", currentBalance);
  return Number(currentBalance);
}

//machine <= value for set balance (minus kore current balance dekhar jonno)
function setBalance(value) {
  const currentBalanceElement = document.getElementById("balance");
  currentBalanceElement.innerText = value;
  // console.log(currentBalanceElement.innerText);
}

// machine <= id  => hide all => show id
function showOnly(id) {
  // console.log("Show only click");
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  const sendMoney = document.getElementById("send-money");
  const transction = document.getElementById("history");
  const getBonus = document.getElementById("get-bonus");
  const paybill = document.getElementById("pay-bill");
  // console.log(`Add Money- ${addMoney}, Send Money-${cashOut}`);
  // sovaike hide kore deo
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  sendMoney.classList.add("hidden");
  transction.classList.add("hidden");
  getBonus.classList.add("hidden");
  paybill.classList.add("hidden");

  // id wala element ta ke show kore deo
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
