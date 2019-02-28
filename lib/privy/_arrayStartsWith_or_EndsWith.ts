import { arraysMatch } from '@writetome51/arrays-match';
import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { getHead, getTail } from '@writetome51/array-get-head-tail';
import { errorIfArrayTooShortFor }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor';


export function _arrayStartsWith_or_EndsWith(
	startsOrEnds: "starts" | "ends", 
	values, 
	array
): boolean {
	if (isEmpty(values)) return arraysMatch(values, array);
	errorIfArrayTooShortFor(values.length, array); // this is mainly for the getTail() function.

	let valuesThatMightMatch: any[];
	if (startsOrEnds === 'starts') valuesThatMightMatch = getHead(values.length, array);
	else valuesThatMightMatch = getTail(values.length, array);
	return arraysMatch(values, valuesThatMightMatch);
}
