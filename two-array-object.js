"use strict";

// add whatever parameters you deem necessary & write docstring

// make an object from two different arrays, one of keys, and one of values
// arrays may be different length
// if not enough values, assign "null"
// if not enough keys, ignore the remaining values
// 

/** Create an object from two arrays, one of keys, another of values.
 * Assigns "null" value for keys past the length of values. 
 * Ignores values past the length of keys. 
 * 
 * Accepts two arrays and returns an object. 
 */

function twoArrayObject(keys,values) {

    const keyValuePairs = {};

    //iterate over keys, end when keys is done
    for (let i=0; i < keys.length; i++) {
        if (values[i] === undefined) {
            keyValuePairs[keys[i]] = null;
        } else { 
            keyValuePairs[keys[i]] = values[i];
        }
    }

    return keyValuePairs;

}
