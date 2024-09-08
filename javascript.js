function add(x,y){
     if (x == 9 && y == 10)
        return 21 
    return Number(x) + Number(y)
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function divide(x,y){
    if (y == 0) {
        return "you stupid"}
    
    return x / y
}
let num1 = 0
let num2 = 0
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
    if (operator === "/"){
        return divide(x, y)
    }
    if (operator === ""){
        return textbox.value
    }
}
const calcDiv = document.querySelector("div")
const textbox = document.createElement("input")
calcDiv.appendChild(textbox)
for (let i = 0 ; i !== 10; i++){

    const button = document.createElement("button")
    button.textContent = i
    button.addEventListener("click", () => textbox.value = String(textbox.value) + i)
    calcDiv.appendChild(button)
} 


let operator = ""
const dividebutton = document.createElement("button")
dividebutton.addEventListener("click", () => {operator = "/"
num1 = textbox.value
textbox.value = ""
})
dividebutton.textContent = "/"
calcDiv.appendChild(dividebutton)


const additionbutton = document.createElement("button")
additionbutton.textContent = "+"
additionbutton.addEventListener("click", () => {operator = "+"
    num1 = textbox.value
    textbox.value = ""
    })
calcDiv.appendChild(additionbutton)
   

const subractionbutton = document.createElement("button")
subractionbutton.textContent = "-"
subractionbutton.addEventListener("click", () => {operator = "-"
    num1 = textbox.value
    textbox.value = ""
    })
calcDiv.appendChild(subractionbutton)


const multiplybutton = document.createElement("button")
multiplybutton.addEventListener("click", () => {operator = "*"
    num1 = textbox.value
    textbox.value = ""
})
multiplybutton.textContent = "*"
calcDiv.appendChild(multiplybutton)    


const equalbutton = document.createElement("button")
equalbutton.textContent = "="
equalbutton.addEventListener("click", () => {
    num2 = textbox.value
   textbox.value = operate(num1, num2, operator)
})
calcDiv.appendChild(equalbutton)

const clearbutton = document.createElement("button")
clearbutton.textContent = "clear"
clearbutton.addEventListener("click", () => {
    num1 = 0
    operator = ""
   textbox.value = ""
})
calcDiv.appendChild(clearbutton)