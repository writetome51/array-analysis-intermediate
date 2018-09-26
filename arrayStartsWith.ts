import { getHead } from '@writetome51/array-non-modifying-getters-basic/getHead';
import { _arrayStartsWith_or_EndsWith } from './_arrayStartsWith_or_EndsWith';


// values cannot contain object.

export function arrayStartsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith(values, getHead, array);
}
