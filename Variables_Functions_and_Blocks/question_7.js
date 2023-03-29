/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
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
 * The above code logs `'hello'`, then `'Hello'`, then `'Hello!!!'` to the
 * console.
 * When the `word` global variable is passed to the `capitalize()` function as
 * an argument, the variable is passed by value because strings are primitive
 * values. The string `'Hello'` is returned on `line 7` and that new string is
 * stored in the `capitalizedWord` variable.
 * The `capitalizedWord` variable is then passed to the `exclaim()` function
 * invocation as an argument on `line 16`. On `line 11` of the function
 * invocation, the `word` parameter--`'Hello'`--is then reassigned to `'Hello +
 * !!!'`. This string is then returned and stored in the `exclaimedWord`
 * variable.
 */