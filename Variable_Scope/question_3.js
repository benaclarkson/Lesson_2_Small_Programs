/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

/**
 * Solution:
 * The above code logs `5` to the console. This is due to the fact that
 * `line 13` is accessing the `num` variable declared on `line 6`. The `num`
 * variable declared and initialized on `line 9` has function scope and is
 * therefore inaccessible outside of the function. The two variables share
 * the same name, but this is just variable shadowing. The outer scope is
 * ignored when this happens, so the value of the `num` variable on `line 6` is
 * never changed.
 */