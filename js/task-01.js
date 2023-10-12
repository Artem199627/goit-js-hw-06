const listEl = document.querySelector("#categories");
console.log(listEl);

const itemEl = listEl.children;
console.log("Number of categories", itemEl.length);

itemEl.forEach((item) => {
console.log("Category:", item.firstElementChild.textContent);
console.log("Elements", item.children.length);
 });