/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

/**
 * Solution:
 * Due, in part, to the fact that arguments are not required, even when
 * parameters are listed in a function declaration, this code logs `5` to the
 * console. Because the `num` variable declared on `line 6` is never passed to
 * the `myFunc` function declared on `line 8`, it is therefore never reassigned
 * on `line 9`. The `num` variable on `line 9` is actually initialized as a new
 * variable with function scope.
 */