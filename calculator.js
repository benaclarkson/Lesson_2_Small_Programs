// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let number1;
let number2;
let operation;
let output;
let anotherCalculation;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

function firstNumber() {
  prompt(MESSAGES['firstNumber']);
  number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['validNumber']);
    number1 = readline.question();
  }
}

function secondNumber() {
  prompt(MESSAGES['secondNumber']);
  number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['validNumber']);
    number2 = readline.question();
  }
}

function calcOutput(op) {
  switch (op) {
    case MESSAGES['1']:
      output = Number(number1) + Number(number2);
      break;
    case MESSAGES['2']:
      output = Number(number1) - Number(number2);
      break;
    case MESSAGES['3']:
      output = Number(number1) * Number(number2);
      break;
    case MESSAGES['4']:
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);
}

function askAgain() {
  anotherCalculation = 'no';
  prompt(MESSAGES['anotherCalc']);
  anotherCalculation = readline.question().toLowerCase();
}

function calculate() {
  firstNumber();

  secondNumber();

  prompt(MESSAGES['operationType']);
  operation = readline.question();

  while (![MESSAGES['1'], MESSAGES['2'], MESSAGES['3'], MESSAGES['4']].includes(operation)) {
    prompt(MESSAGES['validOperator']);
    operation = readline.question();
  }

  calcOutput(operation);

  askAgain();
}

calculate();

while (anotherCalculation === MESSAGES['yes']) {
  calculate();
}