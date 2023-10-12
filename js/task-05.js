const nameInPut = document.querySelector("#name-input");
const nameOutPut = document.querySelector("#name-output");

nameInPut.addEventListener("input", (event) => {
    nameOutPut.textContent = event.currentTarget.value || "Anonymous";
});