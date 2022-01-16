let valueElement = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  valueElement += 1;

  counterValue.innerText = valueElement;
});

dekrBtn.addEventListener("click", (event) => {
  valueElement -= 1;

  counterValue.innerText = valueElement;
});
