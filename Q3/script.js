const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Empty the list first so clicking Generate again doesn't stack a second copy.
  numberList.replaceChildren();

  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = "The number is " + i;
    numberList.appendChild(item);
  }
}

generateBtn.addEventListener("click", generateNumbers);
