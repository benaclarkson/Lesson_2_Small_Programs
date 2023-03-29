/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

/**
 * Solution:
 * The above code will log `'Hello'` to the console. This is because the
 * `String.prototype.concat()` method returns a new string. The original string
 * `'Hello'`, stored in the variable `myWord` is not mutated because it is a
 * primitive value and therefore immutable.
 */