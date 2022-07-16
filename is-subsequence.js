"use strict";

// add whatever parameters you deem necessary & write docstring

// check if the characters in smaller string are a part of larger string (without order changing)
// once we hit a character in string 2 that is not in string 1, we want to take it out of string 2
// once we've taken out every character that's not in string 1, we compare the strings

/** accept a smaller string and a larger string, and return boolean for whether the larger string
contains the smaller string, without changing the order */

function isSubsequence(s1, s2) {
    let s1Counter = makeFreqCounter(s1);
    let s2Counter = makeFreqCounter(s2);
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    for(let char of s1Array) {
        if(s2Counter[char] === undefined) return false;
        
    }
}

function makeFreqCounter(string) {
    const counter = {};
    for (let char of string) {
        counter[char] = counter[char] + 1 || 1;
    }
    return counter;
}




/* function isSubsequence(s1, s2) {
    if(s1.length > s2.length) return false;
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    let container = []
    let compareString ='';
    for(let char of s1Array) {
        if(!s2Array.includes(char)) return false;
        else {
            container.push(s2Array.indexOf(char));
        }
    }
    container.sort((a,b) => a-b);
    for(let char of container) {
        compareString += s2Array[char]
    }
    return s1 === compareString;
}
*/