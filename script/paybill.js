document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const billerBank = getValueFromInput("biller-bank");
  //   validation for bank
  if (billerBank === "Select Bank") {
    alert("Please select the bank");
    return;
  }
  const billerAccNo = getValueFromInput("biller-acc-no");
  //   validation for bank accno.
  if (billerAccNo.length !== 11) {
    alert("Please enter valid account no.");
    return;
  }

  const currentBalance = getCurrentBalance("balance");
  const billerAmt = getValueFromInput("biller-amt");
  const newAmount = currentBalance - Number(billerAmt);
  //   validateion for amount
  if (billerAmt < 0) {
    alert("Please enter the valid amount");
    return;
  } else if (billerAmt === "") {
    alert("Please fill up the amount field");
  }
  const billerPin = getValueFromInput("biller-pin");
  //   validation for pin
  if (billerPin === "1234") {
    alert("Pay bill successfully.");
    // set amount
    setBalance(newAmount);
  } else {
    alert("Please a valid pin number.");
    return;
  }
});
