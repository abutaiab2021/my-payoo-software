// console.log("Send money page connected.");
document
  .getElementById("send-money-btn")
  .addEventListener("click", function () {
    // get user account number
    const userAccount = getValueFromInput("send-money-number");
    console.log("User Account is : ", userAccount);
    if (userAccount.length != 11) {
      alert("Please enter 11 Digit mobile number");
      return;
    }

    // get send money amount
    const userAmount = getValueFromInput("send-money-amount");
    console.log("User Amount is : ", userAmount);
    if (userAmount === "") {
      alert("Please enter the amount!");
      return;
    } else if (userAmount < 0) {
      alert("Please Provide a valid amount!");
      return;
    }

    //get current balance
    const currentBalance = getCurrentBalance("balance");
    console.log(currentBalance);

    // calculate new balance
    const newBalance = currentBalance - Number(userAmount);
    console.log("New Balance", newBalance);

    // get user pin number
    const userPin = getValueFromInput("send-money-pin");
    console.log("User Pin is : ", userPin);
    if (userPin === "1234") {
      alert("Send Money Success Fully!");
      //   set the new value
      setBalance(newBalance);
    } else {
      alert("Please enter the pin number!");
      return;
    }
  });
