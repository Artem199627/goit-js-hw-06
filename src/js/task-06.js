const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);
function onInputBlur() {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {  
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}