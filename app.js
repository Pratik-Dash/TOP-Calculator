let primaryDisplay = document.querySelector('.currentoperanddisplay')
let secondaryDisplay = document.querySelector('.previousoperanddisplay')
let currentOperand = '';
let previousOperand ='';
let operation = undefined;

document.addEventListener("click",(event)=>{

    if(event.target.matches('.numbutton')){

        appendOperands(event.target.value);
        setDisplay();
    }
    if(event.target.matches('.operator')){
        initializeOperation(event.target.value)
       setDisplay();
    }
    if(event.target.matches(".equalBtn")){
        performOperation()
        setDisplay();
    }
    if(event.target.matches('.clear')){
        allClear();
        setDisplay();
    }
    if(event.target.matches('.delete')){
        deleteNumbers();
        setDisplay();
    }

})

function appendOperands(operand){
    if(operand === '.' && primaryDisplay.textContent.includes('.')){
        return;
    }
    else{
        currentOperand = currentOperand.toString()+operand.toString()
    }
}
function setDisplay(){
    
    primaryDisplay.textContent = `${currentOperand}`
    if(operation != undefined){
        secondaryDisplay.textContent = `${previousOperand} ${operation}`
    }
    else{
        secondaryDisplay.textContent = '';
    }
}

function initializeOperation(selectedOperation){
    if(currentOperand === ''){
        return
    }
    if(previousOperand!==''){
        performOperation();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';
}

function performOperation(){
    let result;
    let previousNumber = parseFloat(previousOperand);
    let currentNumber = parseFloat(currentOperand)
    if(isNaN(previousNumber) || isNaN(currentNumber)){
        return
    }
    
    switch(operation){

        case '+':
            result = previousNumber + currentNumber;
            break;
        case '-':
            result = previousNumber - currentNumber;
            break;
        case 'x':
            result = previousNumber * currentNumber;
            break;
        case '÷':
            result = previousNumber / currentNumber;
            break;
        case '%':
            result = previousNumber % currentNumber;
            break;
        default:
            return;
    }
    currentOperand = result
    previousOperand = '';
    operation = undefined;
}
function allClear(){
    currentOperand = '';
    previousOperand = '';
    operation = undefined

}

function deleteNumbers(){
    currentOperand = currentOperand.toString().slice(0,-1);
}