var tempUnit = document.querySelector("#temp-unit").value;
console.log(tempUnit);
function changeTemp(element) {
  tempUnit = element.value;
  updateTempValues();
}

function changeCity(element) {
  alert("Loading weather report...");
  var city = element.innerText;
  document.querySelector(".city").innerText = city;
}

function acceptCookie(element) {
  element.parentElement.remove();
}

function updateTempValues() {
  var allHighTempElements = document.querySelectorAll(".high");
  var allLowTempElements = document.querySelectorAll(".low");

  allHighTempElements.forEach((highTempElement) => {
    highTempElement.innerText =
      Math.round(convertTemp(parseFloat(highTempElement.innerText), tempUnit)) +
      "°";
  });
  allLowTempElements.forEach((lowTempElement) => {
    lowTempElement.innerText =
      Math.round(convertTemp(parseFloat(lowTempElement.innerText), tempUnit)) +
      "°";
  });
}

function convertTemp(temp, unit) {
  if (unit == "f") {
    return temp * 1.8 + 32;
  } else {
    return (temp - 32) / 1.8;
  }
}

if (tempUnit == "f") {
  updateTempValues();
}
