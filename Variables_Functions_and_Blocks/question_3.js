/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

/**
 * Solution:
 * The above code logs `[ 'red', 'green', 'blue', 'purple', 'pink' ]` to the
 * console. This is due to the fact that although the `colors` parameter in the
 * `updateColors()` function shadows the original `colors` array declared on
 * `line 8`, they both point to the same array. Thus, when `color1` and then
 * `color2` are passed to the `Array.push()` method on `line 11`, the original
 * array is mutated.
 */