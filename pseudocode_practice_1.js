/**
 * Write out pseudocode (both casual and formal) that does the following:
 */

/** 
 * Problem:
 * - a function that returns the sum of two numbers
 * 
 * Pseudocode:
 * - Declare a function that allows for two parameters, num1 and num2
 * - Return num1 + num2
 * 
 * Formal Pseudocode:
 * START
 * 
 * GET num1
 * GET num2
 * 
 * PRINT num1 + num2
 * 
 * END 
 */

/**
 * Problem:
 * - a function that takes an array of strings, and returns a string that is all
 *   those strings concatenated together
 * 
 * Pseudocode:
 * - Declare a function that allows for one parameter -- an array of strings
 * - Return each element of the array joined together as one string
 * 
 * Formal Pseudocode:
 * START
 * 
 * GET array of strings
 * 
 * PRINT elements of array concatenated together
 * 
 * END
 */

/** 
 * Problem:
 * - a method that takes an array of integers, and returns a new array with
 *   every other element from the original array, starting with the first
 *   element. For example:
 *   everyOther([1,4,7,2,5]); // => [1,7,5]
 * 
 * Pseudocode:
 * - Declare a function that allows for one parameter -- an array of integers
 * - Loop through every other element in the array, adding said element to a new array
 * - Return the new array
 * 
 * Formal Pseudocode:
 * START
 * 
 * GET array of integers
 * 
 * SET newArray = [];
 * SET iterator = 0
 * WHILE index < length of array
 *   put element of array at index into newArray
 *   iterator = iterator + 2
 * 
 * PRINT newArray
 * 
 * END
 */

/**
 * Problem:
 * - a function that determines the index of the 3rd occurrence of a given
 *   character in a string. For instance, if the given character is 'x' and the
 *   string is 'axbxcdxex', the function should return 6 (the index of the 3rd
 *   'x'). If the given character does not occur at least 3 times, return null.
 *
 * Pseudocode:
 * - Declare a function that allows for two parameters -- a single character
 *   string, char, and another string of any length, str
 * - Create a variable to keep track of occurrences, count
 * - Look through each character in the str string & keep track of current index
 *   - If char is found, add 1 to count
 *     - Check if count is 3
 *       - If count is 3, return the current index
 *       - If count is not 3, move on to the next letter in the string
 *   - If char is not found, return null
 *   - If count is not 3 and str has been completely looked over, return null
 * 
 * Formal Pseudocode:
 * START
 * 
 * GET str
 * GET char
 * 
 * IF str does not include char
 *   PRINT null
 * 
 * SET count = 0
 * 
 * WHILE index < length of str
 *   IF char === element of str at index
 *     SET count = count + 1
 * 
 *     IF count === 3
 *       PRINT index
 *     ELSE
 *       continue to next index
 * 
 * PRINT null
 * 
 * END
 */

/**
 * Problem:
 * - a function that takes two arrays of numbers and returns the result of
 *   merging the arrays. The elements of the first array should become the
 *   elements at the even indexes of the returned array, while the elements of
 *   the second array should become the elements at the odd indexes.
 *   For instance:
 *   merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
 * 
 * Pseudocode:
 * - Declare a function that allows for two parameters -- arr1, arr2
 * - Create a new, empty array, result
 * - Initialize a new variable, arr1Index = 0
 * - Initialize a new variable, arr2Index = 0
 * - Loop arr1.length + arr2.length times
 *   - If the index of the current iteration is even, result.push(arr1[arr1Index])
 *     - Increse arr1Index by 1
 *   - If the index of the current iteration is odd, result.push(arr2[arr2Index])
 *     - Increase the arr2Index by 1
 * - When looping is complete, return result
 * 
 * Formal Pseudocode:
 * START
 * 
 * GET arr1
 * GET arr2
 * SET result = []
 * SET arr1Index = 0
 * SET arr2Index = 0
 * SET index = 0
 * 
 * WHILE index < arr1.length + arr2.length
 *   IF index % 2 === 0
 *     SET result.push(arr1[arr1Index])
 *     SET arr1Index = arr1Index + 1
 *   ELSE
 *     SET result.push(arr2[arr2Index])
 *     SET arr2Index = arr2Index + 1
 * 
 * PRINT result
 * 
 * END
 */

