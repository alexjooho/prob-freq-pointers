"use strict";

// add whatever parameters you deem necessary & write docstring
// make two pointers, and move the left one if average of values is too low; move right one if average is too high;
// be careful of edge cases (make a fail-fast)

/** Determines if a pair of numbers in given array can average to the given target average
 * accepts an array and a number, returns a boolean
 */
function averagePair(nums, targetAvg) {
    if(nums.length < 2) return false;
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        if(avg === targetAvg){
            return true;
        }
        else if(avg > targetAvg) {
            right --;
        }
        else {
            left ++;
        }
    }
    return false;
}

