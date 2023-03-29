/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/**
 * Solution:
 * The above code will log `'hello!!!'`, then `'Hello'`, then `'hello!!!'`
 * This is due to the fact that the global variable, `word` is being accessed
 * in each function invocation, despite the fact that arguments are passed to
 * the `capitalize()` and `exclaim()` functions.
 * When `capitalize()` is invoked, the returned value `'Hello'` is then stored
 * in the `capitalizeWord` variable.
 * When `exclaimedWord()` is invoked, the `+=` operator is used, which is a form
 * of reassignment. It equates to `word = word + '!!!'`. Because there is no
 * parameter in use with function-level scope, the global variable `word` is
 * actually being reassigned to `'hello!!!'`.
 */