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
const keypad = document.createElement("div")


const clearbutton = document.createElement("button")
clearbutton.textContent = "clear"
clearbutton.setAttribute("class", "key")
clearbutton.addEventListener("click", () => {
    num1 = 0
    operator = ""
   textbox.value = ""
})
keypad.appendChild(clearbutton)


keypad.setAttribute("class", "keypad")
calcDiv.appendChild(textbox)
textbox.setAttribute("class", "textbox")
calcDiv.appendChild(keypad)
for (let i = 0 ; i !== 10; i++){

    const button = document.createElement("button")
    button.setAttribute("class", "number")
    button.setAttribute("class", "key")
    button.textContent = i
    button.addEventListener("click", () => textbox.value = String(textbox.value) + i)
    keypad.appendChild(button)
} 


let operator = ""
const dividebutton = document.createElement("button")
dividebutton.setAttribute("class", "key")
dividebutton.addEventListener("click", () => {operator = "/"
    num1 = Number(textbox.value)
textbox.value = ""
})
dividebutton.textContent = "/"
keypad.appendChild(dividebutton)


const additionbutton = document.createElement("button")
additionbutton.setAttribute("class", "key")
additionbutton.textContent = "+"
additionbutton.addEventListener("click", () => {operator = "+"
    num1 = Number(textbox.value)
    textbox.value = ""
    })
keypad.appendChild(additionbutton)
   

const subractionbutton = document.createElement("button")
subractionbutton.setAttribute("class", "key")
subractionbutton.textContent = "-"
subractionbutton.addEventListener("click", () => {operator = "-"
    num1 = Number(textbox.value)
    textbox.value = ""
    })
keypad.appendChild(subractionbutton)


const multiplybutton = document.createElement("button")
multiplybutton.setAttribute("class", "key")
multiplybutton.addEventListener("click", () => {operator = "*"
    num1 = Number(textbox.value)
    textbox.value = ""
})
multiplybutton.textContent = "*"
keypad.appendChild(multiplybutton)    


const equalbutton = document.createElement("button")
equalbutton.setAttribute("class", "key")
equalbutton.setAttribute("id", "equal")
equalbutton.textContent = "="
equalbutton.addEventListener("click", () => {
    num2 = Number(textbox.value)
   textbox.value = operate(num1, num2, operator)
})
keypad.appendChild(equalbutton)

const removelastbutton = document.createElement("button")
removelastbutton.setAttribute("class", "key")
removelastbutton.textContent = "C"
removelastbutton.addEventListener("click", () =>{
    textbox.value = textbox.value.substring(0, textbox.value.length - 1)
})
keypad.appendChild(removelastbutton)


const negativeToggle = document.createElement("button")                                                             
negativeToggle.setAttribute("class", "key")
negativeToggle.textContent = "±"                                                                              /* TODO: make selected operator button glow */
negativeToggle.addEventListener("click", () =>{
    if (textbox.value.charAt(0) == "-"){
        textbox.value = textbox.value.slice(1)                                                                  /* TODO: remove user access to textbox */
    }
    else{
        textbox.value = "-" + textbox.value
    }
})
keypad.appendChild(negativeToggle)

const decimalButton = document.createElement("button")
decimalButton.textContent = "."
decimalButton.addEventListener("click", () => {
    textbox.textContent = textbox.textContent + "."
})
keypad.appendChild(decimalButton)