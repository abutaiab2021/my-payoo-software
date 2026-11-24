// console.log("add money page connected");

document.getElementById("add-money-btn").addEventListener("click", function () {
  //   console.log("add money button clicked.");
  const bankName = getValueFromInput("bank-name");
  console.log(bankName);

  const bankAccNum = getValueFromInput("bank-acc-num");
  console.log(bankAccNum);
});
