// Login event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// deposit event handler
const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");
  updateSpanValue("currentDeposit", depositNumber);
  updateSpanValue("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = "";
});

// withdraw event handler
const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateSpanValue("currentWithdraw", withdrawNumber);
  updateSpanValue("currentBalance", -1 * withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
});
document.get

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanValue(id, amount) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = amount + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}