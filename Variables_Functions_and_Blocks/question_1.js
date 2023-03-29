/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/**
 * Solution:
 * The above code will log `[ 'red', 'green', 'blue', 'yellow' ]` to the
 * console. This is, in short, due to the fact that the `Array.push()` method is
 * destructive and mutates the caller. Since the caller here is the parameter
 * `colors` and that function-scoped (and shadowed) variable points to the same
 * array as the one initialized on `line 7`, the `colors` variable in the outer
 * scope is mutated as well.
 */