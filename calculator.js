
function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}


console.log(add(5, 3)); 
console.log(subtract(10, 4)); 
console.log(multiply(2, 6));
console.log(divide(10, 2));
console.log(divide(10, 0));
