# arrayStartsWith(values, array): boolean  

Returns true if `array` starts with `values`.

# arrayEndsWith(values, array): boolean  

Returns true if `array` ends with `values`.


## Examples
```js
let arr = ['a','b','e','f','g','h','i'];  
arrayStartsWith(['a','b','e'], arr); // true  

let arr = ['a','b','e','f','g','h','i'];  
arrayEndsWith(['h','i'], arr); // true
```

## Installation
`npm i  @writetome51/array-starts-with-ends-with`

## Loading
```js
import {arrayStartsWith, arrayEndsWith} 
	from '@writetome51/array-starts-with-ends-with';
```