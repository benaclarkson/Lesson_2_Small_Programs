/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

/**
 * Solution:
 * The above code will log `5` and then `10` the console. Similarly to the
 * previous question, the `num` variable declared and initialized on `line 6`
 * has global scope and is therefore accessible from within the `myFunc`
 * function. When `line 9` is executed, the current value of `num` is `5`. `num`
 * is then reassigned to the value `10`. After the `myFunc` function invocation
 * on `line 13` has completed, the new value of `num` is passed to `.log()` and
 * output to the console.
 */