// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).heaviside=n()}(this,(function(){"use strict";var e=function(e){return e!=e};return function(n,t){return e(n)?NaN:n>0?1:0===n?"half-maximum"===t?.5:"left-continuous"===t?0:"right-continuous"===t?1:NaN:0}}));
//# sourceMappingURL=bundle.js.map
