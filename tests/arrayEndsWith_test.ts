import { arrayEndsWith } from '../arrayEndsWith';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '', 'blah', '!@#$', false];

let endsWith1 = ['', 'blah', '!@#$', false];
let endsWith2 = [8, 9, 10, '', 'blah', '!@#$', false];
let doesntEndWith1 = ['blah', '!@#$'];
let doesntEndWith2 = [9, 10, '', 'blah', '!@#$'];

// Test 1:  Function should return true if array does end with passed argument:
let resultTrue1 = arrayEndsWith(endsWith1, arr);
let resultTrue2 = arrayEndsWith(endsWith2, arr);
if (resultTrue1 && resultTrue2) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: function should return false if array doesn't end with passed argument:
resultTrue1 = arrayEndsWith(doesntEndWith1, arr);
resultTrue2 = arrayEndsWith(doesntEndWith2, arr);
if (!resultTrue1 && !resultTrue2) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: If first argument isn't array it should trigger error:
let triggeredError = false;
try {
	let result = arrayEndsWith('', arr);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 3 passed');
else console.log('test 3 failed.');


// Test 4: if second argument isn't array it should trigger error:
triggeredError = false;
try {
	let result = arrayEndsWith([1], '');
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 4 passed');
else console.log('test 4 failed.');