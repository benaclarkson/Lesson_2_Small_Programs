/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

/**
 * Solution:
 * The above code returns `[ 'red, 'green', 'blue' ]`. On `line 19`, when the
 * `colors` global variable is passed into the `removeColor()` function
 * invocation, the `Array.pop()` method is invoked on the `colors` parameter,
 * which also points to the same array as the `colors` global variable. This
 * mutates the array to which both variables point. The updated array is then
 * returned and stored in the `newColors` variable. When the `Array.pop()`
 * method is invoked, the returned value is stored in the `color` global
 * variable, reassigning it to `'blue'`. At this point, the global `colors`
 * variable and the `newColors` variable both point to the same array, whose
 * value is currently `[ 'red', 'green' ]`.
 * On `line 20`, the `addColor()` function is invoked and the global variables
 * `colors` and `color` are passed in as arguments. The `color` parameter is
 * then passed as an argument to the `Array.push()` method, which mutates the
 * caller--`colors`. Because the parameter `colors`, and the global variables
 * `colors` and `newColors` all point to the same array at the same memory
 * address, the mutation affects them all. Thus, when `newColors` is logged,
 * `[ 'red', 'green', 'blue' ]` is output.
 */