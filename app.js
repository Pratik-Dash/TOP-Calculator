const container = document.querySelector(".container")
const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display");
for(let button of buttons){
    button.addEventListener("click",(e)=>{
        if(!button.classList.contains("operator")){
            display.innerHTML += `<h1>${e.target.value}</h1>`;
        }
        else{
            display.innerHTML = `<h1>${e.target.value}</h1>`;
        }
    })
}
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