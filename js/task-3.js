const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue === "") {
    spanName.textContent = "Anonymous";
} else {
    spanName.textContent = inputValue;
};
});


