// create webpage with 16x16 grid of square divs

const mainDiv = document.querySelector("#mainDiv");

for (let i=0; i<16*16; i++) {
    var square = document.createElement("div");
    square.className = "sqr";
    square.style.border = "1px solid black"
    // square.style.display = "flex"
    square.style.width = `${(mainDiv.offsetWidth/16)-2.4}px`
    mainDiv.appendChild(square);
}

console.log("ss", mainDiv.offsetWidth)
console.log("ss", square.offsetWidth)
