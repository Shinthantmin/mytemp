const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const restart = document.getElementById("reBtn");

// Attach event listeners to the buttons
toFahrenheit.addEventListener("click", convertToFahrenheit);
toCelsius.addEventListener("click", convertToCelsius);

function convertToFahrenheit() {
  const temp = Number(textBox.value);
  const converted = (temp * 9) / 5 + 32;
  result.textContent = `${converted.toFixed(1)}°F`;
}

function convertToCelsius() {
  const temp = Number(textBox.value);
  const converted = (temp - 32) * (5 / 9);
  result.textContent = `${converted.toFixed(1)}°C`;
}

document.getElementById("resetBtn").onclick = function () {
  textBox.value = 0;
  document.getElementById("textBox").innerHTML = textBox.value;
  result.textContent = "Select the Unit";
};
