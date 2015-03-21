/*jslint node:true*/
// Let's Call the Whole Thing Off
// by η

"use strict";
var obj = {};

var either = function either() {
    obj = false; // closure, yay
    Array.prototype.slice.call(arguments).forEach(function(arg) {
        if (arg && !obj) {
            obj = arg;
        }
    });
    return obj;
};

either.which = function recall() {
    // more closure
    if (!obj) return false;
    return obj;
};

either.all = function eitherAll() {
    obj = [];
    Array.prototype.slice.call(arguments).forEach(function(arg) {
        if (arg) {
            obj.push(arg);
        }
    });
    if (obj.length === 0) obj = false;
    return obj;
};

module.exports = either;
