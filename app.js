const container = document.querySelector(".container")
const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display");
const clearButton = document.querySelector*".clear"
const DeleteButton = document.querySelector*".Delete"
for(let button of buttons){
    button.addEventListener("click",(e)=>{
        if(!button.classList.contains("operator") && !button.classList.contains("equalBtn" && !button.classList.contains("clear") && !button.classList.contains("delete"))){
            display.innerHTML += `<h1>${e.target.value}</h1>`;
        }
        else{
            display.innerHTML = `<h1>${e.target.value}</h1>`;
        }
    })
}
clearButton.addEventListener("click", Clear)
function Operate(number1, number2,operation){


}

function Add(a,b){
    return a+b;
}

function Subtract(a,b){
return a-b;
}

function Multiply(a,b){
    return a*b;
}

function Divide(a,b){
    return a/b;
}

function Modulo(a,b){
    return a%b;
}

function Clear(){
    let currentString = display.innerText;
    currentString = currentString.slice(currentString.length-1);
    display.innerHTML = `<h1>${currentString}</h1>`
}