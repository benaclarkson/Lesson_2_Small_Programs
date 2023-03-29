/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

/**
 * Solution:
 * The above code will not log anything the console and actually produces a
 * `ReferenceError`. This is because the `log()` method invocation on `line 9`
 * is attempting to access the value of `num` that has been declared and
 * initialized on `line 10` since they have the same scope.
 */