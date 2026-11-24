// console.log("add money page connected");

document.getElementById("add-money-btn").addEventListener("click", function () {
  //   console.log("add money button clicked.");
  const bankName = getValueFromInput("bank-name");
  //   console.log(bankName);

  //   bankselect validation
  if (bankName === "Select Bank") {
    alert("Please select a Bank!");
    return;
  }

  //   bank num
  const bankAccNum = getValueFromInput("bank-acc-num");
  //   console.log("Bank Account Number : ", bankAccNum);
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
  //   console.log("added money is :", addMoney);
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
  //   console.log("Current Balance : ", currentBalnce);
  //   new balance calculation
  const newBalance = currentBalnce + Number(addMoney);
  //   console.log("New Balance : ", newBalance);

  //   get pin
  const pin = getValueFromInput("add-money-pin");
  console.log("pin number is :", pin);
  //   validation
  if (pin === "1234") {
    // caret simbol use kora hoise
    alert(`Add Money Successfully!
    ${bankName} 
    at ${new Date()}`);
    // set balance
    setBalance(newBalance);
    // 1.history container ke dore niye asbo
    const history = document.getElementById("history-container");
    console.log(history);
    // 2.new div create korbo
    const newHistory = document.createElement("div");
    console.log(newHistory);
    // 3.new div innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transction-card p-10 bg-base-100">
          Add Money Successfully!
          ${bankName} , acc-no ${bankAccNum}
          at ${new Date()}
    </div>
    `;
    // 4.history container e newDiv Append
    history.append(newHistory);
  } else {
    alert("Please Provide a  valid Pin Number");
    return;
  }
});
