const listEl = document.querySelector("#categories");
// console.log(listEl);
const itemEl = document.querySelectorAll(".item");
 const itemsEl = listEl.children;
console.log("Number of categories", itemsEl.length);

itemEl.forEach((item) => {
console.log("Category:", item.firstElementChild.textContent);
console.log("Elements", item.lastElementChild.children.length);
 });