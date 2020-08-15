import { _arrayStartsWith_or_EndsWith } from './privy/_arrayStartsWith_or_EndsWith';
import { getHead, getTail } from '@writetome51/array-get-head-tail';


export function arrayEndsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith(getTail, values, array);
}


export function arrayStartsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith(getHead, values, array);
}
