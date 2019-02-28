"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
var errorIfArrayTooShortFor_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor");
function _arrayStartsWith_or_EndsWith(startsOrEnds, values, array) {
    if (isEmpty_notEmpty_1.isEmpty(values))
        return arrays_match_1.arraysMatch(values, array);
    errorIfArrayTooShortFor_1.errorIfArrayTooShortFor(values.length, array); // this is mainly for the getTail() function.
    var valuesThatMightMatch;
    if (startsOrEnds === 'starts')
        valuesThatMightMatch = array_get_head_tail_1.getHead(values.length, array);
    else
        valuesThatMightMatch = array_get_head_tail_1.getTail(values.length, array);
    return arrays_match_1.arraysMatch(values, valuesThatMightMatch);
}
exports._arrayStartsWith_or_EndsWith = _arrayStartsWith_or_EndsWith;
