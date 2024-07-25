const formLog = document.querySelector(".login-form");
formLog.addEventListener("submit", (event) => {
    event.preventDefault();
const email = formLog.elements.email.value.trim();
const password = formLog.elements.password.value.trim();

if (email === "" || password === "") {
    alert('All form fields must be filled in')
} else {
    const formData = {
        email: email,
        password: password,
    };
    console.log(formData);
    formLog.reset();
}
});


