// create webpage with 16x16 grid of square divs

const mainDiv = document.querySelector("#mainDiv");
const sideDimension = 33;
for (let i=0; i<sideDimension*sideDimension; i++) {
    var square = document.createElement("div");
    square.className = "sqr";
    square.style.border = "1px solid black"
    // square.style.display = "flex"
    square.style.width = `${(mainDiv.offsetWidth/sideDimension)-2.4}px`
    mainDiv.appendChild(square);
}



// add listener that changes square color while hovering

var allSquares = document.querySelectorAll(".sqr")
allSquares.forEach((el) => el.addEventListener("mouseover", f => {el.style.background= "red"}))



console.log("div dimension", mainDiv.offsetWidth)
console.log("square dimension", square.offsetWidth)
