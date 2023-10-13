const loginForm = document.querySelector("form.login-form");
// console.log(loginForm);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || password === "") {
         console.log("Please fill in all the fields!");
        } else {
            const data = {
                email, password,
            };
        console.log(data);
    }
        loginForm.reset();
    }

