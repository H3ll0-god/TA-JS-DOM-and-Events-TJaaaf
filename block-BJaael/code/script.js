// Function to generate a random hex color code
function generaterandomcolor() {
    let hexcolor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomcolor = getrandomnumber(16);
        color = color + hexcolor[randomcolor];
    }
    return color;
}

// Helper function to generate a random number from 0 to max-1
function getrandomnumber(max) {
    return Math.floor(Math.random() * max);
}

// Select the container where boxes will be appended
let parentBox = document.querySelector(".boxes");

// Create 500 Boxes and append them to the container
for (let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box"); // Add the box class to each div

    // Create a random number for the box
    let h3 = document.createElement("h3");
    let randomno = getrandomnumber(500);
    h3.innerText = randomno;
    div.append(h3);

    // Add event listener to change background color on mousemove
    div.addEventListener("mousemove", function () {
        let randomColor = generaterandomcolor();
        div.style.backgroundColor = randomColor;
    });

    parentBox.append(div); // Append the box to the parent container
}
