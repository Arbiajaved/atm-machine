let balance = 5000; // Starting balance

function startATM() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('withdraw-screen').classList.remove('hidden');
}

function processWithdrawal() {
  const amount = parseFloat(document.getElementById('amount').value);
  const accountType = document.getElementById('accountType').value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance.");
    return;
  }

  balance -= amount;

  document.getElementById('withdraw-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('resultMessage').innerText = `₹${amount} withdrawn from your ${accountType} account.\nRemaining Balance: ₹${balance}`;
}

function cancelTransaction() {
  alert("Transaction Cancelled. Card ejected.");
  location.reload();
}

function finishTransaction() {
  alert("Card ejected. Thank you!");
  location.reload();
}
