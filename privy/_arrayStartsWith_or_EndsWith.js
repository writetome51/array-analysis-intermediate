"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfArrayTooShortFor_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortFor");
function _arrayStartsWith_or_EndsWith(values, getHeadOrGetTail, array) {
    if (isEmpty_notEmpty_1.isEmpty(values))
        return arrays_match_1.arraysMatch(values, array);
    errorIfArrayTooShortFor_1.errorIfArrayTooShortFor(values.length, array);
    var valuesThatMightMatch = getHeadOrGetTail(values.length, array);
    return arrays_match_1.arraysMatch(values, valuesThatMightMatch);
}
exports._arrayStartsWith_or_EndsWith = _arrayStartsWith_or_EndsWith;
