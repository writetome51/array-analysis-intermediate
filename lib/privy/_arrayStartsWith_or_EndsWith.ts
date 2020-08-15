import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfNotArray } from 'error-if-not-array';
import { isEmpty } from '@writetome51/is-empty-not-empty';


export function _arrayStartsWith_or_EndsWith(
	getHeadOrTail: (howMany: number, array: any[]) => any[],
	values,
	array
): boolean {
	if (isEmpty(values)) {
		errorIfNotArray(values); // in case it's another type that also has length property.
		return isEmpty(array);
	}
	let valuesThatMightMatch = getHeadOrTail(values.length, array);
	return arraysMatch(values, valuesThatMightMatch);
}
