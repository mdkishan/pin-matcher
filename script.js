const digitBtn = document.querySelectorAll(".digit");
const getPin = document.getElementById("get-pin");
const inputPinArea = document.getElementById("input-pin-area");

const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function () {
  getPin.value = 1000 + Math.floor(Math.random() * 9000);
});

digitBtn.forEach((digit) => {
  digit.addEventListener("click", () => {
    inputPinArea.value = inputPinArea.value + digit.innerText;
  });
});

document.getElementById("delete").addEventListener("click", () => {
  inputPinArea.value = inputPinArea.value.slice(0, -1);
});

document.getElementById("clear").addEventListener("click", () => {
  inputPinArea.value = "";
});

document.querySelector(".submit-btn").addEventListener("click", () => {
  function clearDisplay() {
    getPin.value = "";
    inputPinArea.value = "";
  }
  if (getPin.value != "" && getPin.value == inputPinArea.value) {
    document.getElementById("matched").style.display = "block";
    document.getElementById("not-matched").style.display = "none";
    clearDisplay();
  } else {
    document.getElementById("not-matched").style.display = "block";
    document.getElementById("matched").style.display = "none";
    clearDisplay();
  }
});
