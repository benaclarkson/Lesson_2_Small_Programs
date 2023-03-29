/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

/**
 * Solution:
 * The above code logs `[ 'Hi', 'Goodbye' ]` and then `'Hello'` to the console.
 * This is due to the fact that when the element at index `0` of the `myWords`
 * array is changed to the `'Hi'` on `line 8`, the string stored in that
 * location and the string stored in `myWord` are in separate locations in
 * memory and immutable. Thus, a change of one does not affect the other.
 */