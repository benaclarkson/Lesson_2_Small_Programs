/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

/**
 * Solution:
 * The above code logs `[ 'red', 'green', 'blue', 'purple', 'pink' ]` to the
 * console. When the `colors` and the `color1` variables are passed into the
 * `updateColors` function, the shadowed `colors` parameter then points to the
 * same array as the original `colors` variable initialized on `line 8`. Thus,
 * when `line 11` is executed, the `color` variable is passed as an argument to
 * the `Array.push()` method, mutating the `colors` array. The mutated array
 * is then returned on `line 12`.
 * On `line 15`, that returned array is then stored in the `newColors` array.
 * When `updateColors()` is invoked on `line 16`, the return value is not stored
 * anywhere. However, because the `Array.push()` method is destructive and
 * because the array that `newColors` points to is the same as the array that
 * `colors` points to, the one array is mutated for both variables yet again.
 * Thus, when `colors` is logged to the console, it reveals that the orginal
 * array has been mutated twice.
 */