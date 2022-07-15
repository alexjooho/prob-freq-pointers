"use strict";

// add whatever parameters you deem necessary & write doc comment
// make sure all characters in the word are in letters
// letters can have more characters than in word
// make frequency counter for both and make sure the value in letters >= word frequency

/** checks if given word can be constructed from string of letters
 * accepts two strings and returns boolean
*/
function canConstructWord(word, letters) {
    // can add "fail fast" for if letters = 0 or is less than word length
    if(letters.length = 0 || letters.length < word.length) return false;
    let wordFreq = makeFreqCounter(word);
    let lettersFreq = makeFreqCounter(letters);
    for(let char of word) {
        if(wordFreq[char] > lettersFreq[char]) return false;
    }
    return true;
}

function makeFreqCounter(string) {
    const counter = {};
    for(let char of string) {
        counter[char] = counter[char] + 1 || 1;
    }
    return counter;
}