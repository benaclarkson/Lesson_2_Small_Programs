/**
 * PROBLEM:
 * Take everything that you've learned so far and build a mortgage calculator
 * (or car payment calculator -- it's the same thing).
 *
 * You'll need three pieces of information
 *   1. the loan amount
 *   2. the Annual Percentage Rate (APR)
 *   3. the loan duration
 *
 * From the above, you'll need to calculate the following two things:
 *   1. monthly interest rate
 *   2. loan duration in months
 *
 * You can use the following formula:
 * let m = p * (j / (1 - Math.pow((1 + j), (-n))));
 *
 * m = monthly payment
 * p = loan amount
 * j = monthly interest rate
 * n = loan duration in months
 *
 * When you write your program, don't use the single-letter variables m, p, j,
 * and n; use explicit names. For instance, you may want to use loanAmount
 * instead of p.
 *
 * Try to print the payment amount as a dollar and cents amount, e.g., $123.45
 * or $371.00.
 *
 * Finally, don't forget to run your code through ESLint. Also, consider asking
 * for a code review after you've reviewed your code against the possible
 * solution, and made any adjustments that you need to make.
 *
 * Hints:
 * - Decide what input formats your program expects. For example, should the
 *   user enter an interest rate of 5% as 5 or .05?
 * - If you're working with an Annual Percentage Rate (APR), you need to convert
 *   it to a monthly interest rate for use in the formula.
 * - Be careful about the loan duration -- are you working with months or years?
 *   Choose variable names carefully to assist in remembering.
 * - Think about edge cases. There are plenty of edge cases to work with in this
 *   problem, and each presents interesting challenges. For instance, consider
 *   whether you want to support no-interest loans or loans that aren't for an
 *   integer number of years.
 * - You can use this loan calculator to check your results:
 *   https://www.calculator.net/loan-calculator.html
 *
 * Input:
 * Loan Amount - Floating point number
 *   - When prompting user, start their entry with a dollar sign
 *   - Check for existence of dollar sign in input, nonetheless
 *   - Remove, if necessary
 * Annual Percentage Rate - Floating point number
 *   - Request percentage -- e.g. 18.53%, not 0.1853
 *   - Remove % symbol and convert
 * Loan Duration (in months) - Number (floating point or integer)
 *
 * Output:
 * The monthly payment
 *   - Floating point number
 *   - Prepended $
 *   - String interpolation? e.g. Your monthly mortgage payment is $123.45.
 *
 * Rules:
 * - No single-char abbreviations for variable names
 * - Print the payment amount as a dollar and cents amount.
 * - Allow for 0% interest
 *
 * Mental Model:
 * - User enters the total loan amount
 *   - Program validates input, and converts, if necessary to float
 * - User enters the Annual Percentage Rate
 *   - Program validates input, and converts to decimal (apr / 100)
 * - User enters the loan duration, in months
 * - Program enters these values into formula and outputs monthly mortgage rate
 *
 * EXAMPLES/TEST CASES:
 * Loan Amount: $100,000
 * APR: 6%
 * Loan Duration: 120 months
 * Mortgage: $1,110.21
 *
 * DATA STRUCTURE:
 * Floating point Number data type
 *
 * ALGORITHM:
 * x Require readline-sync
 * x Ask user for loan amount
 *   x Clean input
 *     x Remove '$' and ',' if they exist in string
 *     x Convert to float
*    x Validate input is a number
 *     x While input isNaN:
 *       x Ask user for input again
 *       x Clean input again
 * x Ask user for APR
 *   x Clean input
 *     x Remove '%' if exists in string
 *     x Divide by 100
 *     x Convert string to float decimal
 *   x Validate input is a number (0 counts)
 *     x While input isNaN
 *       x Ask user for input again
 *       x Clean input again
 * x Ask user for loan duration, in months
 *   x Clean input
 *     x Use unary `+` operator
 *   x Validate input is a number
 *     x While input isNaN
 *       x Ask user for input again
 *       x Clean input again
 * x Run given formula with input values from user
 * x Another calc?
 *   x Goodbye if no
*/

const READLINE = require('readline-sync');
const INVALID_MSG = "Hmm... That doesn't appear to be a valid input.";
const MONTHS_IN_YEAR = 12;
const PERCENTAGE = 100;

function prompt(message) {
  console.log(`=> ${message}`);
}

function captureLoanAmount() {
  prompt('What is the total loan amount? (ex: $50,000)');
  return +(READLINE.question()
    .trimStart()
    .trimEnd()
    .replace(/\$/, '')
    .replace(/,/, ''));
}

function zeroAPR(aPR) {
  if (aPR === '0' || aPR === '0%' || aPR === '0.0%' || aPR === '0.00%') {
    return true;
  } else {
    return false;
  }
}

function captureApr() {
  prompt('What is the Annual Percentage Rate? (ex: 6%)');
  let tempAnnualPercentageRate = READLINE.question()
    .trimStart()
    .trimEnd();

  if (zeroAPR(tempAnnualPercentageRate)) {
    return 0.00
  } else if (tempAnnualPercentageRate.match(/\d+.*%*/)) {
    return +(tempAnnualPercentageRate.replace(/[%]/, '')) / PERCENTAGE;
  } else {
    return +(tempAnnualPercentageRate);
  }
}

function captureLoanDuration() {
  prompt('What is the loan duration, in months?');
  return +(READLINE.question()
    .trimStart()
    .trimEnd());
}

function calculatePayment(loanAmt, aPR, loanDur) {
  if (aPR === 0.00) return loanAmt / loanDur;

  let monthlyPaymentRate = aPR / MONTHS_IN_YEAR;
  return loanAmt *
    (monthlyPaymentRate /
    (1 - Math.pow((1 + monthlyPaymentRate), (-loanDur))));
}

function welcomeUser() {
  console.clear();
  prompt('Welcome to Mortgage Calculator!');
}

function invalidLoanAmount(amt) {
  return (Number.isNaN(amt) || amt <= 0);
}

function invalidAPR(apr) {
  return (Number.isNaN(apr) || apr < 0);
}

function invalidLoanDuration(duration) {
  return (Number.isNaN(duration) || duration <= 0);
}

function displayMonthlyPayment(pmt) {
  prompt(`Your monthly payment is: $${pmt.toFixed(2)}`);
}

function anotherCalc() {
  prompt('-------------------------------------------------------');
  prompt('Would you like calculate another monthly mortgage rate?');
  prompt('(Enter "y" or "n")');
  return READLINE.question().toLowerCase();
}

function invalidAnswer(response) {
  return (response !== 'y' && response !== 'n');
}

welcomeUser();

while (true) {
  let loanAmount = captureLoanAmount();
  while (invalidLoanAmount(loanAmount)) {
    prompt(INVALID_MSG);
    loanAmount = captureLoanAmount();
  }

  let annualPercentageRate = captureApr();
  while (invalidAPR(annualPercentageRate)) {
    prompt(INVALID_MSG);
    annualPercentageRate = captureApr();
  }

  let loanDuration = captureLoanDuration();
  while (invalidLoanDuration(loanDuration)) {
    prompt(INVALID_MSG);
    loanDuration = captureLoanDuration();
  }

  let monthlyPayment =
    calculatePayment(loanAmount, annualPercentageRate, loanDuration);
  displayMonthlyPayment(monthlyPayment);

  let answer = anotherCalc();
  while (invalidAnswer(answer)) {
    prompt('Please enter "y" or "n".');
    answer = READLINE.question().toLowerCase();
  }

  if (answer === 'n') {
    prompt('Thanks for using the Mortgage Calculator!');
    break;
  }

  console.clear();
}