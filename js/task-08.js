const loginForm = document.querySelector("form.login-form");
// console.log(loginForm);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    const alertInfo = "Please fill in all the fields!";
    if (email === "" || password === "") {
         alert(alertInfo);
        } else {
            const data = {
                email, password,
            };
        console.log(data);
    }
        loginForm.reset();
    }

