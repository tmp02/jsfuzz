// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Newa`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01145B,
    0x01145D
  ],
  ranges: [
    [0x011400, 0x011459]
  ]
});
testPropertyEscapes(
  /^\p{Script=Newa}+$/u,
  matchSymbols,
  "\\p{Script=Newa}"
);
testPropertyEscapes(
  /^\p{Script=Newa}+$/u,
  matchSymbols,
  "\\p{Script=Newa}"
);
testPropertyEscapes(
  /^\p{sc=Newa}+$/u,
  matchSymbols,
  "\\p{sc=Newa}"
);
testPropertyEscapes(
  /^\p{sc=Newa}+$/u,
  matchSymbols,
  "\\p{sc=Newa}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01145A,
    0x01145C
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0113FF],
    [0x01145E, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Newa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Newa}"
);
testPropertyEscapes(
  /^\P{Script=Newa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Newa}"
);
testPropertyEscapes(
  /^\P{sc=Newa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Newa}"
);
testPropertyEscapes(
  /^\P{sc=Newa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Newa}"
);

reportCompare(0, 0);
