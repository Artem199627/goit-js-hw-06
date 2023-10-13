const input = document.querySelector("#validation-input");
const length = input.dataset.length;
input.addEventListener("blur", ()  => {
    if (input.value.length !== Number(length)) { 
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {  
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
});