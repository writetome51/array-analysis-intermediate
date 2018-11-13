To include:

import {arrayStartsWith, arrayEndsWith} from '@writetome51/array-starts-with-ends-with';

arrayStartsWith(values, array); // returns true if array starts with values.  
arrayEndsWith(values, array); // returns true if array ends with values.

NOTICE: parameter 'values' cannot contain object.

Examples:

let arr = ['a','b','e','f','g','h','i'];  
arrayStartsWith(['a','b','e'], arr); // true