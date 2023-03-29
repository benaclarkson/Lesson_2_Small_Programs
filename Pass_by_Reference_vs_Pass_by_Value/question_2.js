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
myWord = changeMyWord(myWord);
console.log(myWord);

/**
 * Solution:
 * The above code logs `'Hello'` and then `'HELLO'` to the console. This is due
 * to the fact that when `myWord` is passed the the `changeMyWord()` function
 * as an argument, it is logged to the console on `line 7`. The `word` parameter
 * is then reassigned to the return value of invoking `word.toUpperCase()` on
 * `line 8`. The reassigned `word` parameter is then returned.
 * `myWord` is reassigned to the return value of calling `changeMyWord(myWord)`
 * on `line 13`, which is then logged to the console.
 */