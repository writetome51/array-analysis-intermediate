"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _arrayStartsWith_or_EndsWith_1 = require("../privy/_arrayStartsWith_or_EndsWith");
var arr = [[1, 2], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2]];
// Test 1: The function works if a nested array is in the array:
var startsWith = [[1, 2], 1, 2, 3, 4];
var endsWith = [8, 9, 10, [1, 2]];
var firstResultTrue = _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith('starts', startsWith, arr);
var secondResultTrue = _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith('ends', endsWith, arr);
if (firstResultTrue && secondResultTrue)
    console.log('test 1 passed');
else
    console.log('test 1 failed.');
arr = ['the', 'small', 'dog', 1, true, false, 100];
// Test 2: it works with an array of different data types:
startsWith = ['the', 'small'];
endsWith = [true, false, 100];
firstResultTrue = _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith('starts', startsWith, arr);
secondResultTrue = _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith('ends', endsWith, arr);
if (firstResultTrue && secondResultTrue)
    console.log('test 2 passed');
else
    console.log('test 2 failed.');
