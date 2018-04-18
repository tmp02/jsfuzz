// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-213
description: >
    Object.create - 'writable' property of one property in
    'Properties' is a negative number primitive (8.10.5 step 6.b)
---*/

        var newObj = Object.create({}, {
            prop: {
                writable: -9
            }
        });
        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = 121;

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(newObj.prop, 121, 'newObj.prop');

reportCompare(0, 0);
