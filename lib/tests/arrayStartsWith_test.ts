import { arrayStartsWith } from '../arrayStartsWith';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '', 'blah', '!@#$', false];

let StartsWith1 = [1, 2, 3];
let StartsWith2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ''];
let doesntStartWith1 = [2, 3];
let doesntStartWith2 = [2, 3, 4, 5, 6, 7];

// Test 1:  Function should return true if array does end with passed argument:
let resultTrue1 = arrayStartsWith(StartsWith1, arr);
let resultTrue2 = arrayStartsWith(StartsWith2, arr);
if (resultTrue1 && resultTrue2) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: function should return false if array doesn't end with passed argument:
resultTrue1 = arrayStartsWith(doesntStartWith1, arr);
resultTrue2 = arrayStartsWith(doesntStartWith2, arr);
if (!resultTrue1 && !resultTrue2) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A
arr = [];
if (arrayStartsWith([], arr)) console.log('test 2A passed');
else console.log('test 2A FAILED');

// Test 2B
arr = [1, 2];
if (!(arrayStartsWith([], arr))) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3: If first argument isn't array it should trigger error:
let triggeredError = false;
try {
	let result = arrayStartsWith('', arr);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 3 passed');
else console.log('test 3 FAILED.');


// Test 4: if second argument isn't array it should trigger error:
triggeredError = false;
try {
	let result = arrayStartsWith([1], '');
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 4 passed');
else console.log('test 4 FAILED.');


// Test 5: if values is too long it should trigger error:
arr = [1];
triggeredError = false;
try {
	let result = arrayStartsWith([2,3,4], arr);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 5 passed');
else console.log('test 5 FAILED.');