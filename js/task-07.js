const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log(fontSize);
console.log(text);
fontSize.addEventListener("input", () => {
    text.style.fontSize = fontSize.value + "px";
});