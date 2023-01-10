//numbers
var numero1 = 4, numero2 = 4;

//add
function add(num1, num2) {
  return num1 + num2;
}

//subtract
function subtract(num1, num2) {
  return num1 - num2;
}

//multiply
function multiply(num1, num2) {
  return num1 * num2;
}

//division
function divide(num1, num2) {
  return num1 / num2;
}

var str = `${numero1} + ${numero2} = ${add(numero1, numero2)}
${numero1} - ${numero2} = ${subtract(numero1, numero2)}
${numero1} * ${numero2} = ${multiply(numero1, numero2)}
${numero1} / ${numero2} = ${divide(numero1, numero2)}
`;

console.log(str)