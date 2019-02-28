# arrayStartsWith(values, array): boolean  

Returns true if `array` starts with `values`.

# arrayEndsWith(values, array): boolean  

Returns true if `array` ends with `values`.

NOTICE: `values` cannot contain objects.  Arrays are OK.

## Examples
```
let arr = ['a','b','e','f','g','h','i'];  
arrayStartsWith(['a','b','e'], arr); // true  

let arr = ['a','b','e','f','g','h','i'];  
arrayEndsWith(['h','i','j'], arr); // false  
arrayEndsWith(['h','i'], arr); // true
```

## Installation
`npm i  @writetome51/array-starts-with-ends-with`

## Loading
```
// if using TypeScript:
import {arrayStartsWith, arrayEndsWith} from '@writetome51/array-starts-with-ends-with';
// if using ES5 JavaScript:
var arrayStartsWith = 
    require('@writetome51/array-starts-with-ends-with').arrayStartsWith;
var arrayEndsWith = 
    require('@writetome51/array-starts-with-ends-with').arrayEndsWith;
```