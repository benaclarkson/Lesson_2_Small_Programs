/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

/**
 * Solution:
 * The above code will log `'Hello'` twice. This is due to the fact that both
 * `myWord` and `myOtherWord` point to a string `'Hello'`. Technically speaking,
 * the strings stored in each variable are different strings and have different
 * addresses in memory.
 */