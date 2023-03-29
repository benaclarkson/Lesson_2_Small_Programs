/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

/**
 * Solution:
 * The above code logs `[ 'Hi', 'Bye' ]` and then `[ 'Hello', 'Goodbye' ]` to
 * the console. This is due to the fact that `myWords` is declared and then
 * initialized to the array `[ 'Hello', 'Goodbye' ]` on `line 6`. On `line 7`,
 * the variable `myOtherWords` is declared and then initialized to the same
 * array at the same address as `myWords`. On `line 8`, when `myWords` is
 * changed to reference the array `[ 'Hi', 'Bye' ]`, it is then referencing an
 * entirely different array at a different address and leaves `myOtherWords`
 * unchanged.
 */