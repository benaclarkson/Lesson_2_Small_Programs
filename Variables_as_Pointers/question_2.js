/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

/**
 * Solution:
 * The above code will log `'Goodbye'`, then `'Hello'` to the console. This is
 * due to the fact that, because both `myWord` and `myOtherWord` point to
 * different strings on `line 7`. Thus, when `myWord` is reinitialized to the
 * string `'Goodbye'`, we are just changing the string stored at that specific
 * address and it does not affect the string stored in the address for
 * `myOtherWord`.
 */