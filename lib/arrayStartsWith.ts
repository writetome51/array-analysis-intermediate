import { _arrayStartsWith_or_EndsWith } from './privy/_arrayStartsWith_or_EndsWith';


// values cannot contain object.

export function arrayStartsWith(values: any[], array): boolean {
	return _arrayStartsWith_or_EndsWith('starts', values, array);
}
