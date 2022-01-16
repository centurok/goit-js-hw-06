let inputElement = document.querySelector("#name-input");
inputElement.addEventListener("input", onInputChange);

let outputElement = document.querySelector("#name-output");

function onInputChange(event) {
  inputElement = event.currentTarget.value;
  console.log(inputElement);

  inputElement !== " " ? (outputElement.innerText = inputElement.trim()) : "Anonymous";
}
