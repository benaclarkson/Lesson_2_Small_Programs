/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

/**
 * Solution:
 * The above code logs `[ 'Hello' ]` to the console. This is due to the fact
 * that the `String.toUpperCase()` method is invoked on the string at index `0`
 * of the `myWords` array. Because strings are immutable, this method returns
 * a new string, but does not mutate the original string.
 */