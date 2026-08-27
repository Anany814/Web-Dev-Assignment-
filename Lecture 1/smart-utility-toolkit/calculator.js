const args = process.argv.slice(2);

const green = '\x1b[32m';
const red = '\x1b[31m';
const yellow = '\x1b[33m';
const cyan = '\x1b[36m';
const reset = '\x1b[0m';

if (args.length < 3) {
  console.log(red + 'Please provide operation and two numbers.' + reset);
  console.log(yellow + 'Usage: node calculator.js add 10 5' + reset);
  process.exit(1);
}

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log(red + 'Both values must be numbers.' + reset);
  process.exit(1);
}

let result;

if (operation === 'add') {
  result = num1 + num2;
  console.log(cyan + num1 + ' + ' + num2 + ' = ' + green + result + reset);
} else if (operation === 'subtract') {
  result = num1 - num2;
  console.log(cyan + num1 + ' - ' + num2 + ' = ' + green + result + reset);
} else if (operation === 'multiply') {
  result = num1 * num2;
  console.log(cyan + num1 + ' * ' + num2 + ' = ' + green + result + reset);
} else if (operation === 'divide') {
  if (num2 === 0) {
    console.log(red + 'Cannot divide by zero.' + reset);
    process.exit(1);
  }
  result = num1 / num2;
  console.log(cyan + num1 + ' / ' + num2 + ' = ' + green + result + reset);
} else {
  console.log(red + 'Unknown operation: ' + operation + reset);
  console.log(yellow + 'Valid operations: add, subtract, multiply, divide' + reset);
  process.exit(1);
}

console.log(green + 'Result: ' + result + reset);
