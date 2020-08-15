import { _arrayStartsWith_or_EndsWith } from '../privy/_arrayStartsWith_or_EndsWith.js';


let arr = [[1, 2], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2]];
// Test 1: The function works if a nested array is in the array:
let startsWith = [[1, 2], 1, 2, 3, 4];
let endsWith = [8, 9, 10, [1, 2]];
let firstResultTrue = _arrayStartsWith_or_EndsWith('starts', startsWith, arr);
let secondResultTrue = _arrayStartsWith_or_EndsWith('ends', endsWith, arr);
if (firstResultTrue && secondResultTrue)
    console.log('test 1 passed');
else
    console.log('test 1 failed.');
arr = ['the', 'small', 'dog', 1, true, false, 100];
// Test 2: it works with an array of different data types:
startsWith = ['the', 'small'];
endsWith = [true, false, 100];
firstResultTrue = _arrayStartsWith_or_EndsWith('starts', startsWith, arr);
secondResultTrue = _arrayStartsWith_or_EndsWith('ends', endsWith, arr);
if (firstResultTrue && secondResultTrue)
    console.log('test 2 passed');
else
    console.log('test 2 failed.');
