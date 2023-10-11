const listEl = document.querySelector("#categories");
console.log(listEl);
const itemEl = listEl.querySelectorAll(".item");
console.log("Number of categories", itemEl.length);
itemEl.forEach((items) => {
    console.log("Category", items.firstElementChild.textContent);
    console.log("Elements", items.querySelectorAll("li").length);
});