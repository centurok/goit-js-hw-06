const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulElements = document.querySelector("#ingredients");

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");
ulElements.innerHTML = list;
