/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/**
 * Solution:
 * The above code logs `[ 'Hello', 'Goodbye' ]` and `[ 'Hi', 'Goodbye' ]` to the
 * console. When the `myWords` variable is passed into the `changeMyWords`
 * function, it is logged to the console on `line 7`. The element at index `0`
 * of the `myWords` array is then reassigned to the string `'Hi'`. Due to the
 * fact that arrays are objects and objects are mutable, this changes the
 * original `myWords` array that was passed into the function.
 */