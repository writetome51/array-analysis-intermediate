"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _arrayStartsWith_or_EndsWith_1 = require("./privy/_arrayStartsWith_or_EndsWith");
// values cannot contain object.
function arrayEndsWith(values, array) {
    return _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith('ends', values, array);
}
exports.arrayEndsWith = arrayEndsWith;