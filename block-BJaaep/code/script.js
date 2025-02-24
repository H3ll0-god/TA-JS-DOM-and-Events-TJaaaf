let firstboxes = document.querySelectorAll(".first li");

firstboxes.forEach(box => {
    box.addEventListener('click, () => {
        console.log(event.target);
});