/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

/**
 * Solution:
 * The above code will log `[ 'Hi', 'Goodbye' ]` and `'Hello'` to the console.
 * This is due to the fact that when `myWord` is declared and initialized to the
 * value of `myWords[0]` it points to a string `'Hello'`, which is immutable.
 * Thus, when the value of the element at index `0` of `myWords` is changed to
 * `'Hi'` it has no impact on the string `'Hello'` which is stored in `myWord`.
 */