let totalCharDisplay = document.getElementById("total-char");
let remainingCharDisplay = document.getElementById("remaining-char");
let charactersTyped = document.getElementById("text-area");
let limitReached = document.getElementById("limit-reached");
let totalChar = 50;

remainingCharDisplay.innerText = totalChar;

charactersTyped.addEventListener("keyup", characterCounter);

function characterCounter() {
  totalCharDisplay.innerText = charactersTyped.value.length;
  remainingCharDisplay.innerText = totalChar - charactersTyped.value.length;
  if (Number(remainingCharDisplay.innerText) === 0) {
    limitReached.style.display = "block";
  } else {
    limitReached.style.display = "none";
  }
}
