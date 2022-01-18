const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulElements = document.querySelector("#ingredients");

const listItems = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  return listItem;
});

ulElements.append(...listItems);
