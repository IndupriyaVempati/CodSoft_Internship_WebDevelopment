// Select Display
let display = document.getElementById("display");

// Append Value to Display
function appendValue(value) {
  display.value += value;
}

// Clear Entire Display
function clearDisplay() {
  display.value = "";
}

// Delete Last Character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
