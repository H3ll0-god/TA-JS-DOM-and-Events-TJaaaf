let buttonone = document.querySelector(".first");
let buttontwo = document.querySelector(".second");

function generaterandomcolor(){
    let hexcharacters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


    let color = "#";
    for(let i=0;i<6;i++){
    let randomNumber = Math.floor(Math.random() * 16);
    
    color = color + hexcharacters[randomNumber]
    }
    return color;
}


function handleclick(){
let randomcolor = generaterandomcolor();
buttonone.style.backgroundcolor = randomcolor;
}
function handlemousemove(){
let randomcolor = generaterandomcolor();
buttontwo.style.backgroundcolor = randomcolor;
}

buttonone.addEventListener("click",handleclick);
buttontwo.addEventListener("mousemove",handlemousemove);