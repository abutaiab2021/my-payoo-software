// console.log("add money page connected");

document.getElementById("add-money-btn").addEventListener("click", function () {
  //   console.log("add money button clicked.");
  const bankName = getValueFromInput("bank-name");
  console.log(bankName);

  //   bankselect validation
  if (bankName === "Select Bank") {
    alert("Please select the Bank!");
    return;
  }

  //   bank num
  const bankAccNum = getValueFromInput("bank-acc-num");
  console.log("Bank Account Number : ", bankAccNum);
  //   bank account number validation
  if (bankAccNum < 0) {
    alert("Please Provide a valid positive number");
    return;
  } else if (bankAccNum.length != 16) {
    alert("Please provide a valid Bank account Number");
    return;
  }

  //   amount
  const addMoney = getValueFromInput("add-money-amt");
  console.log("added money is :", addMoney);
  //   validation
  if (addMoney < 0) {
    alert("Please Provide a valid amount");
    return;
  } else if (addMoney === "") {
    alert("Please Fill Up The Amount Field!");
    return;
  }

  //   get current balance element
  const currentBalnce = getCurrentBalance("balance");
  console.log("Current Balance : ", currentBalnce);
  //   new balance calculation
  const newBalance = currentBalnce + Number(addMoney);
  console.log("New Balance : ", newBalance);

  //   get pin
  const pin = getValueFromInput("add-money-pin");
  console.log("pin number is :", pin);
  //   validation
  if (pin === "1234") {
    alert("Add Money Successfully.");
    // set balance
    setBalance(newBalance);
  } else {
    alert("Please Provide a  valid Pin Number");
    return;
  }
});
