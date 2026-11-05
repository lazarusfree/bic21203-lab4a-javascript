const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

function changeMessage() {
  message.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);
