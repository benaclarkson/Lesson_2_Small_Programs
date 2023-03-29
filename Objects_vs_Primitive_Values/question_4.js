/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

/**
 * Solution:
 * The above code logs `[ 'Hello' ]` to the console. This is due to the fact
 * that the `Array.prototype.concat()` method does not mutate the caller--
 * `mywords` in this instance. Therefore, the original array stored in `myWords`
 * remains unchanged.
 */