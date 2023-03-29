/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

/**
 * Solution:
 * The above code logs `'Hello'`, then `'Hello'`, then `'HELLO'`. This is due to
 * the fact that when `line 7` runs, the argument that was passed into the
 * `changeMyWord()` function on `line 13` is logged. Then, the parameter is
 * reassigned to the return value of calling the `String.toUpperCase()` method
 * on the parameter. Then, the reassigned parameter is returned. That return
 * value is then stored in the `myOtherWord` variable. The original, unaffected,
 * `myWord` variable is logged to the console, and then the `myOtherWord`
 * variable is logged to the console.
 */