"use strict";

// add whatever parameters you deem necessary & write docstring
// positive numbers on left, negative numbers on right (order doesn't matter)
// return original array, NOT A COPY

/** accept an array of non-zero numbers and return the same array
 * with the positive numbers separated to the left, and negative numbers
 * separated to the right
 */

function separatePositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            let negative = numbers[i];
            numbers.splice(numbers[i], 1);
            numbers.push(negative);
            i--;
        }
    }
    return numbers;
}


// need this because if a negative number is moved, we need to check the same index again

/*    if (number[i] > 0) {      // don't need this because the positive numbers will just stay on the left while negative go to the right;
            let positive = numbers[i];
            numbers.splice(numbers[i], 1);
            numbers.unshift(positive);
        }
    */