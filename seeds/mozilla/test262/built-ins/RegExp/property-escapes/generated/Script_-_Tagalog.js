// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tagalog`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001700, 0x00170C],
    [0x00170E, 0x001714]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tagalog}+$/u,
  matchSymbols,
  "\\p{Script=Tagalog}"
);
testPropertyEscapes(
  /^\p{Script=Tglg}+$/u,
  matchSymbols,
  "\\p{Script=Tglg}"
);
testPropertyEscapes(
  /^\p{sc=Tagalog}+$/u,
  matchSymbols,
  "\\p{sc=Tagalog}"
);
testPropertyEscapes(
  /^\p{sc=Tglg}+$/u,
  matchSymbols,
  "\\p{sc=Tglg}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00170D
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0016FF],
    [0x001715, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tagalog}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tagalog}"
);
testPropertyEscapes(
  /^\P{Script=Tglg}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tglg}"
);
testPropertyEscapes(
  /^\P{sc=Tagalog}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tagalog}"
);
testPropertyEscapes(
  /^\P{sc=Tglg}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tglg}"
);

reportCompare(0, 0);
