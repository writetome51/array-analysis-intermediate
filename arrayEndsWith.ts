import { _arrayStartsWith_or_EndsWith } from './_arrayStartsWith_or_EndsWith';
import { getTail } from '@writetome51/array-non-modifying-getters-basic/getTail';


// values cannot contain object.

export function arrayEndsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith(values, getTail, array);
}
