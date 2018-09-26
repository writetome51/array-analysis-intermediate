"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _arrayStartsWith_or_EndsWith_1 = require("./_arrayStartsWith_or_EndsWith");
var getTail_1 = require("@writetome51/array-non-modifying-getters-basic/getTail");
// values cannot contain object.
function arrayEndsWith(values, array) {
    return _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith(values, getTail_1.getTail, array);
}
exports.arrayEndsWith = arrayEndsWith;
