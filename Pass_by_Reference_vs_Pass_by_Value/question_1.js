/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

/**
 * Solution:
 * The above code will log `'Hello'` to the console twice. This is due to the
 * fact that, although the `word` parameter is reassigned to the return value of
 * invoking the `String.toUpperCase()` method, strings are immutable and the
 * original `myWord` variable, which was passed into the `changeMyWord` function
 * as an argument, remains unchanged.
 */