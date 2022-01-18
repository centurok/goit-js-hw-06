const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;
decrBtn.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
  console.log(counterValue);
});
incrBtn.addEventListener("click", () => {
  value.textContent = counterValue += 1;
  console.log(counterValue);
});
