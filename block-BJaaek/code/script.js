let boxone = document.querySelector(".first");
let boxtwo = document.querySelector(".second");


function generaterandomcolor(){
let hexcharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let color = "#";
for( let i=0;i<6;i++){
    let randomnumber = Math.floor(Math.random() * 16);
    color = color + hexcharacters[randomnumber];
}
return color;
}

function handleclick(){
    /* 1.Generate random color
       2.Change the background color of the box */
       let randomcolor = generaterandomcolor();
boxone.style.backgroundColor = randomcolor;
}

function handlemousemove(){
    let randomcolor = generaterandomcolor();
    boxtwo.style.backgroundColor = randomcolor;
}
boxone.addEventListener("click", handleclick);
boxtwo.addEventListener("mousemove", handlemousemove);

