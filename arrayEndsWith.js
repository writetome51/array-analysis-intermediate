"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTail_1 = require("@writetome51/array-non-modifying-getters-basic/getTail");
var _arrayStartsWith_or_EndsWith_1 = require("./privy/_arrayStartsWith_or_EndsWith");
// values cannot contain object.
function arrayEndsWith(values, array) {
    return _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith(values, getTail_1.getTail, array);
}
exports.arrayEndsWith = arrayEndsWith;
