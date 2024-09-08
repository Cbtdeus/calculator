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
textbox.disabled = true
const keypad = document.createElement("div")


const clearbutton = document.createElement("button")
clearbutton.textContent = "AC"
clearbutton.setAttribute("class", "key")
clearbutton.addEventListener("click", () => {
    num1 = 0
    operator = ""
   textbox.value = ""
})


keypad.setAttribute("class", "keypad")
calcDiv.appendChild(textbox)
textbox.setAttribute("class", "textbox")
calcDiv.appendChild(keypad)


let operator = ""
const dividebutton = document.createElement("button")
dividebutton.classList.add("operator","key")
dividebutton.addEventListener("click", () => {operator = "/"
    num1 = Number(textbox.value)
textbox.value = ""
})
dividebutton.textContent = "/"



const additionbutton = document.createElement("button")
additionbutton.classList.add("operator","key")
additionbutton.textContent = "+"
additionbutton.addEventListener("click", () => {operator = "+"
    num1 = Number(textbox.value)
    textbox.value = ""
    })

   

const subractionbutton = document.createElement("button")
subractionbutton.classList.add("operator","key")
subractionbutton.textContent = "-"
subractionbutton.addEventListener("click", () => {operator = "-"
    num1 = Number(textbox.value)
    textbox.value = ""
    })



const multiplybutton = document.createElement("button")
multiplybutton.classList.add("operator","key")
multiplybutton.addEventListener("click", () => {operator = "*"
    num1 = Number(textbox.value)
    textbox.value = ""
})
multiplybutton.textContent = "*"
 


const equalbutton = document.createElement("button")
equalbutton.classList.add("operator","key")
equalbutton.setAttribute("id", "equal")
equalbutton.textContent = "="
equalbutton.addEventListener("click", () => {
    num2 = Number(textbox.value)
   textbox.value = operate(num1, num2, operator)
})


const removelastbutton = document.createElement("button")
removelastbutton.classList.add("utility","key")
removelastbutton.textContent = "C"
removelastbutton.addEventListener("click", () =>{
    textbox.value = textbox.value.substring(0, textbox.value.length - 1)
})



const negativeButton = document.createElement("button")                                                             
negativeButton.classList.add("utility","key")
negativeButton.textContent = "±"                                                                              /* TODO: make selected operator button glow */
negativeButton.addEventListener("click", () =>{
    if (textbox.value.charAt(0) == "-"){
        textbox.value = textbox.value.slice(1)                                                                  /* TODO: remove user access to textbox and add keyboard support thru listeners */
    }
    else{
        textbox.value = "-" + textbox.value
    }                                                                                                                  
})


const decimalButton = document.createElement("button")
decimalButton.classList.add("utility","key")
decimalButton.textContent = "."
decimalButton.addEventListener("click", () => {
    if (textbox.value.includes(".")){
        return
    }                                                                                                                                  
    textbox.value = textbox.value + "."

})

keypad.appendChild(dividebutton)
keypad.appendChild(negativeButton)
keypad.appendChild(clearbutton)
keypad.appendChild(removelastbutton)
 
for (let i = 0 ; i !== 10; i++){

    const button = document.createElement("button")
    button.classList.add("number","key")
    button.setAttribute("id", i)
    button.textContent = i
    button.addEventListener("click", () => textbox.value = String(textbox.value) + i)
    keypad.appendChild(button)
} 

keypad.insertBefore(multiplybutton, document.getElementById("4"))
keypad.insertBefore(subractionbutton, document.getElementById("7"))
keypad.appendChild(additionbutton)
keypad.appendChild(decimalButton)

keypad.appendChild(equalbutton)
keypad.insertBefore(document.getElementById("0"), equalbutton)

