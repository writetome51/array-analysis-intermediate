import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';
import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfArrayTooShortFor } 
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor';


export function _arrayStartsWith_or_EndsWith(values, getHeadOrGetTail: Function, array): boolean {
	if (isEmpty(values)) return arraysMatch(values, array);
	errorIfArrayTooShortFor(values.length, array);
	let valuesThatMightMatch = getHeadOrGetTail(values.length, array);
	return arraysMatch(values, valuesThatMightMatch);
}
