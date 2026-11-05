const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  const text = userInput.value.trim();
  // Number() rejects "10abc" outright, unlike parseFloat() which would read it as 10.
  // isFinite also rules out NaN and "Infinity".
  const value = Number(text);
  let isValid = true;

  if (text === "" || !Number.isFinite(value)) {
    result.textContent = "Please enter a valid number!";
    isValid = false;
  } else if (value < 10) {
    result.textContent = "The number is lower than 10";
  } else if (value > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }

  result.classList.toggle("invalid", !isValid);
}

checkBtn.addEventListener("click", checkInput);
