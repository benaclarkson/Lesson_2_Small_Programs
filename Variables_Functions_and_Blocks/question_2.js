/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/**
 * Solution:
 * The above code logs `[ 'red', 'green', 'blue', undefined ]` to the console.
 * This is due, in part, to the fact that when the `updateColors()` function is
 * invoked, it is only given one argument. Thus, the function-scoped (and
 * shadowed) `color` variable is initialized to the value of `undefined` when
 * the function is invoked. The `colors` array that was initialized on `line 7`
 * was passed into the `updateColors()` function on `line 13`, is then shadowed
 * by the `colors` parameter within the `updateColors()` function. These both
 * point to the same array at the same address in memory. Thus, the original
 * `colors` variable is also mutated.
 */