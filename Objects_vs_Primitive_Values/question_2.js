/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

/**
 * Solution:
 * The above code logs the string `'Hello'` to the console on 3 separate
 * occasions. Once on `line 8`, again on `line 10` and then a third time on
 * `line 12`. Each time a method is called on the `myWord` variable, a new
 * string is returned, but not stored anywhere. Due to the fact that the string
 * `'Hello'`, which is stored in the variable, `myWord`, is a primitive value,
 * it is immutable and therefore remains unchanged after each method invocation.
 */