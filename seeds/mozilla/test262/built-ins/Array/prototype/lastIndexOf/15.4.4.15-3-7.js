// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
es5id: 15.4.4.15-3-7
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is a negative number)
---*/

        var obj = { 4: -Infinity, 5: Infinity, length: 5 - Math.pow(2, 32) };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, -Infinity), -1, 'Array.prototype.lastIndexOf.call(obj, -Infinity)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, Infinity), -1, 'Array.prototype.lastIndexOf.call(obj, Infinity)');

reportCompare(0, 0);