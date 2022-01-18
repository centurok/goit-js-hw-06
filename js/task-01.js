const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = document.querySelectorAll("ul#categories li.item");

categoriesArray.forEach((title) => {
  console.log("Category: ", title.firstElementChild.textContent);
  console.log("Elements: ", title.lastElementChild.children.length);
});
