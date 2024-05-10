// create webpage with 16x16 grid of square divs

const mainDiv = document.querySelector("#mainDiv");
let sideDimension;
let allSquares
let square
sideDimension = 16;

function feelSquares () {
for (let i=0; i<sideDimension*sideDimension; i++) {
    square = document.createElement("div");
    square.className = "sqr";
    square.style.border = "1px solid black"
    // square.style.display = "flex"
    square.style.width = `${(mainDiv.offsetWidth/sideDimension)-3}px`
    mainDiv.appendChild(square);
    hovering();
}}

feelSquares()

// add listener that changes square color while hovering
function hovering (){
allSquares = document.querySelectorAll(".sqr")
allSquares.forEach((el) => el.addEventListener("mouseover", f => {el.style.background= "red"}))}

// add button that asks about the square numbers

const btn = document.createElement("button");
btn.innerHTML = "click me to set how many squares do you want  to have? "
btn.style = "font-size: 25px; padding: 20px; border: 5px solid black; background-color: silver "
document.body.insertBefore(btn, mainDiv)


function sendPopup () {
    sideDimension = window.prompt("how many squares do you want (maximal 100)", 0) }
    
    
    btn.addEventListener("click", sendPopup)
    btn.addEventListener("click", f=> {allSquares.forEach((el) => el.parentNode.removeChild(el))})
    btn.addEventListener("click", feelSquares)
    
    //make button that allows to randomize the hovering color
    
const btnRandomColor = document.createElement("button")
btnRandomColor.innerText = "rainbow?";
btnRandomColor.style = "font-size: 25px; padding: 20px; border: 5px solid black; background-color: silver "
document.body.insertBefore(btnRandomColor, mainDiv)
btnRandomColor.addEventListener("click", changeHoovering)
function changeHoovering () {
    allSquares = document.querySelectorAll(".sqr")
    allSquares.forEach((el) => el.addEventListener("mouseover", f => {el.style.background= randomColor()}))}  

function randomColor(){
    //random number between 0 and 15
    let randomNumber = Math.floor(Math.random()*16);
    const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    //create Hex code
    let code = "";
    for(let i=0; i<6; i++){
        code += hexArray[Math.floor(Math.random()*16)]
    }
    //hex code starts with #
   return `#${code}`;
}

    console.log("div dimension", mainDiv.offsetWidth)
// console.log("square dimension", square.offsetWidth)
