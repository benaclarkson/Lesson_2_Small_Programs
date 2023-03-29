/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

/**
 * Solution:
 * The above code will log `3` to the console. The `while` loop assesses the
 * `num` variable defined on `line 6` upon each iteration to see if it is `< 3`.
 * Because it is initialized to `1`--and because the `while` loop block has
 * access to variables defined in the outer scope--the loop runs once and the
 * `num` variable is reassigned to `1 + 1`. The `while` loop assesses the `num`
 * variable again, sees that it is `2` and `< 3`, so it runs again. This time
 * reassigning the value of `num` to `2 + 1`. Upon this assessment, the `while`
 * loop sees that the value of `num` is now `3` and halts execution. Thus, when
 * `console.log(num)` on `line 12` is run, the result is `3` being logged to the
 * console.
 */