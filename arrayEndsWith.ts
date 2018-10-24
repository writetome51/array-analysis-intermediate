import { getTail } from '@writetome51/array-get-head-tail/getTail';
import { _arrayStartsWith_or_EndsWith } from './privy/_arrayStartsWith_or_EndsWith';


// values cannot contain object.

export function arrayEndsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith(values, getTail, array);
}
