let display = document.getElementById("display");
let body = document.body;

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/%/g, "/100"));
  } catch (e) {
    display.value = "Error";
  }
}

function toggleMode() {
  body.classList.toggle("dark-mode");
}
