/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

/**
 * Solution:
 * The above code logs `[ 'Hi', 'Goodbye' ]` twice. This is due to the fact that
 * both `myWords` and `myOtherWords` reference the same address in memory for
 * the array `[ 'Hello', 'Goodbye' ]`. Thus, when that array is mutated, it
 * affects both variables because they both point to the same array in the same
 * address in memory.
 */