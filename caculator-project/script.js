// Get the display element
const display = document.getElementById('display');

// Function to append a number or operator to the display
function appendToDisplay(value) {
    display.textContent += value;
}

// Function to clear the display
function clearDisplay() {
    display.textContent = "";
}

// Function to delete the last character from the display
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

// // Function to calculate the result
function calculateResult() {
    try {
        // Use eval to calculate, but it's risky. Avoid it for serious apps.
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// ------------------------------------------------>

// // Function to calculate the result without using eval()
// function calculateResult() {
//     const input = display.textContent;

//     try {
//         const result = evaluateExpression(input);
//         display.textContent = result;
//     } catch (error) {
//         display.textContent = 'Error';
//     }
// }

// // Function to evaluate a mathematical expression safely
// function evaluateExpression(expression) {
//     // Split the expression into numbers and operators
//     const operators = [];
//     const numbers = [];
//     let currentNumber = '';

//     for (let char of expression) {
//         if (['+', '-', '*', '/'].includes(char)) {
//             numbers.push(parseFloat(currentNumber));
//             operators.push(char);
//             currentNumber = '';
//         } else {
//             currentNumber += char;
//         }
//     }

//     // Add the last number
//     numbers.push(parseFloat(currentNumber));

//     // Perform calculations based on operators
//     let result = numbers[0];
//     for (let i = 0; i < operators.length; i++) {
//         const operator = operators[i];
//         const nextNumber = numbers[i + 1];

//         switch (operator) {
//             case '+':
//                 result += nextNumber;
//                 break;
//             case '-':
//                 result -= nextNumber;
//                 break;
//             case '*':
//                 result *= nextNumber;
//                 break;
//             case '/':
//                 result /= nextNumber;
//                 break;
//             default:
//                 throw new Error('Invalid operator');
//         }
//     }

//     return result;
// }
