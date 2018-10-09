"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getHead_1 = require("@writetome51/array-non-modifying-getters-basic/getHead");
var _arrayStartsWith_or_EndsWith_1 = require("./privy/_arrayStartsWith_or_EndsWith");
// values cannot contain object.
function arrayStartsWith(values, array) {
    return _arrayStartsWith_or_EndsWith_1._arrayStartsWith_or_EndsWith(values, getHead_1.getHead, array);
}
exports.arrayStartsWith = arrayStartsWith;
