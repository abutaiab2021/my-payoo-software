// console.log("get bonus page connected");

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  //   console.log("get bonus btton click");
  const getCopun = getValueFromInput("bonus-cupon");
  //   console.log(getCopun);
  const currentBalance = getCurrentBalance("balance");
  const newBalance = currentBalance + 1000;
  if (getCopun === "Allah") {
    // set balance
    alert("You Get Bonus Cupon Successfully!");
    setBalance(newBalance);

    // 1.history container ke dore niye asbo
    const history = document.getElementById("history-container");
    // console.log(history);
    // 2.new div create korbo
    const newHistory = document.createElement("div");
    // console.log(newHistory);
    // 3.new div innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transction-card p-10 bg-base-100">
          Get Bonus Successfully!
          ${1000} Taka, To Write '${getCopun}' Properly
          at ${new Date()}
    </div>
    `;
    // 4.history container e newDiv Append
    history.append(newHistory);
  } else {
    alert("Please provide valid cupon like 'Allah'");
    return;
  }
});
