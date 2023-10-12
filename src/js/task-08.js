const loginForm = document.querySelector(".login-form");
console.log(loginForm);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    if (login === "" || password === "") {
        return console.log("Please fill in all the fields!");
    }
    console.log(`Login: ${login.value}, Password: ${password.value}`);
    form.reset();
}

