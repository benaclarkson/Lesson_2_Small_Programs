/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

/**
 * Solution:
 * The above code will not log anything to the console and actually creates an
 * infinite loop on lines 8-11. This is due to the fact that the `num` variable
 * being assessed by the `while` loop on `line 8` is the variable defined and
 * initialized on `line 6`. Because that variable is never reassigned to a value
 * greater than `1`, the `while` loop will run infinitely.
 */