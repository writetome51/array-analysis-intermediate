import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from 'error-if-array-too-short-to-meet-adjacent-items-request';
import { getHead, getTail } from '@writetome51/array-get-head-tail';
import { isEmpty } from '@writetome51/is-empty-not-empty';


export function _arrayStartsWith_or_EndsWith(
	startsOrEnds: "starts" | "ends", 
	values, 
	array
): boolean {

	if (isEmpty(values)) return arraysMatch(values, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(0, values.length, array.length);

	let valuesThatMightMatch: any[];
	if (startsOrEnds === 'starts') valuesThatMightMatch = getHead(values.length, array);
	else valuesThatMightMatch = getTail(values.length, array);

	return arraysMatch(values, valuesThatMightMatch);
}
