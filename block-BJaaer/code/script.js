let form = document.querySelector("form");
form.addEventListener("Submit", (event) => {
    event.preventDefault();
    console.log(event);
});