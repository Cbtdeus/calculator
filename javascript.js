function add(x,y){
     if (x === 9 && y === 10)
        return 21 
    return x + y
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function divide(x,y){
    if (y === 0) 
        return "you stupid"
    return x / y
}
num1 = 5
num2 = 10
operator = "^"
function operate(x,y,operator){
    if (operator === "+"){
        return add(x,y)
    }
    if (operator === "-"){
        return subtract(x, y)
    }
    if (operator === "*"){
        return multiply(x, y)
    }
    if (operator === "^"){
        return divide(x, y)
    }
}
const calcDiv = document.querySelector("div")
const textbox = document.createElement("input")
calcDiv.appendChild(textbox)
for (let i = 0 ; i !== 10; i++){

    const button = document.createElement("button")
    button.textcontent = i
    button.addEventListener("click", () => textbox.value = String(textbox.value) + i)
    calcDiv.appendChild(button)
} 
const dividebutton = document.createElement("button")
dividebutton.addEventListener("click", () => )             /* should store num1, reset the textbox, set operator to divide */_
