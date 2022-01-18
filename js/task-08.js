const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  const dataForm = { email, password };
  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    console.log(dataForm);
  }
  form.reset();
}
