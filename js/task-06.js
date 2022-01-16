let inputElement = document.querySelector("#validation-input");

let inputLength = inputElement.dataset.length;

const input = document.querySelector("input");
inputElement.addEventListener("change", (e) => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
