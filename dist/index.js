import { _arrayStartsWith_or_EndsWith } from './privy/_arrayStartsWith_or_EndsWith.js';
import { getHead, getTail } from '@writetome51/array-get-head-tail';


export function arrayEndsWith(values, array) {
    return _arrayStartsWith_or_EndsWith(getTail, values, array);
}


export function arrayStartsWith(values, array) {
    return _arrayStartsWith_or_EndsWith(getHead, values, array);
}
