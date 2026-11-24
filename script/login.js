console.log("login file connected");

document.getElementById("login-btn").addEventListener("click", function () {
  // 1-> get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  // 2-> get the pin input
  const pinInput = document.getElementById("input-pin");
  const pinNumber = pinInput.value;
  console.log(pinNumber);
  // 3-> match pin and mobile number
  if (contactNumber === "01234567890" && pinNumber === "1234") {
    // 3-1 => true :::=> alert => home page
    alert("Login Successfully!");
    // window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    // 3-2 => false :::=> alert => return kore off kore dibo
    alert("Please Enter Your Pin!");
    return;
  }
});
