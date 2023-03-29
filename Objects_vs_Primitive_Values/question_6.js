/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

/**
 * Solution:
 * The above code logs `[ 'HELLO' ]` to the console. This is due to the fact
 * that the return value of calling `String.toUpperCase()` on the string at
 * index `0` of the array stored in the variable `myWords` is then stored in the
 * same array at index `0`. The new string takes the place of the old string and
 * the `myWords` array object is mutated accordingly.
 */