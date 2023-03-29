/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

/**
 * Solution:
 * The above code will log `[ 'Hello', 'Goodbye' ]` to the console. This is due
 * to the fact that value stored in the variable, `myWords` is an array, which
 * is mutable. When we invoke the `Array.prototype.push()` method on the
 * `myWords` array, it is mutated. The updated value of the `myWords` variable
 * is then output on `line 9`.
 */