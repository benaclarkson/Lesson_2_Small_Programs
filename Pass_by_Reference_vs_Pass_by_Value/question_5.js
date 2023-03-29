/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/**
 * Solution:
 * The above code logs `[ 'Hello', 'Goodbye' ]` to the console twice. This is
 * due to the fact that although the `words` parameter that is passed into the
 * `changeMyWords` function is reassigned on `line 8`, it does not affect the
 * original `myWords` array.
 */