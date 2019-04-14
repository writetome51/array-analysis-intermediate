"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var error_if_array_too_short_to_meet_adjacent_items_request_1 = require("error-if-array-too-short-to-meet-adjacent-items-request");
var array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
function _arrayStartsWith_or_EndsWith(startsOrEnds, values, array) {
    if (is_empty_not_empty_1.isEmpty(values))
        return arrays_match_1.arraysMatch(values, array);
    error_if_array_too_short_to_meet_adjacent_items_request_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(0, values.length, array.length);
    var valuesThatMightMatch;
    if (startsOrEnds === 'starts')
        valuesThatMightMatch = array_get_head_tail_1.getHead(values.length, array);
    else
        valuesThatMightMatch = array_get_head_tail_1.getTail(values.length, array);
    return arrays_match_1.arraysMatch(values, valuesThatMightMatch);
}
exports._arrayStartsWith_or_EndsWith = _arrayStartsWith_or_EndsWith;
