/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

/**
 * Solution:
 * The above code will log the number `10` to the console. This is due to the
 * fact that the `num` variable, initialized on `line 6` has global scope and
 * is accessible from within the function `myFunc` declared on
 * `line 8`-`line 10`.
 */