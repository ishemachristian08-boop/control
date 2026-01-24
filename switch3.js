//arithmetic operations
let num1 = 10;
let num2 = 5;
let operator = "+";
let result;

switch (operator) {
    case "+":
        result =num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log("Division by zero error");
        }
        break;
    default:
        console.log("Invalid operator");
}


