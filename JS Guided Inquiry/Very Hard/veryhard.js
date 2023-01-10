// User input variable
var numero1 = parseFloat(prompt("What's the first number?"));

// Get user input
alert(numero1)

// User input variable
var numero2 = parseFloat(prompt("What's the second number?"));

// Get user input
alert(numero2)

// User input variable
var operation = prompt("What do you want to do with them?")

// Get user input
alert(operation)

// Add function
function add(num1, num2) {
    return num1 + num2;
}
// Subtract function
function subtract(num1, num2) {
    return num1 - num2;
}
// Multiply function 
function multiply(num1, num2) {
    return num1 * num2;
}
// Divide function
function divide(num1, num2) {
    return num1 / num2;
}
// Object to call functions based on entered operation symbol
var operations = {
    "+": `${numero1} ${operation} ${numero2} = ${add(numero1, numero2)}`,
    "-": `${numero1} ${operation} ${numero2} = ${subtract(numero1, numero2)}`,
    "*": `${numero1} ${operation} ${numero2} = ${multiply(numero1, numero2)}`,
    "/": `${numero1} ${operation} ${numero2} = ${divide(numero1, numero2)}`,
}
console.log(operations[operation])