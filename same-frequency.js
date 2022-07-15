"use strict";

// add whatever parameters you deem necessary & write docstring

// accepts two positive integers
// sees if two numbers have the same frequency of digits

function sameFrequency(num1,num2) {
    const num1Digits = makeFreqCounter(num1);
    const num2Digits = makeFreqCounter(num2);

    for (let digit in num1) {
        
    }
}


function makeFreqCounter(num) {
    const counter = {};

    const numString = num.toString();

    for(let digit of numString) {
        counter[digit] = counter[digit] + 1 || 1;
    }
    return counter;
}