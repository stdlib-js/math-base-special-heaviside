// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function s(s,n){return t(s)?NaN:s>0?1:0===s?"half-maximum"===n?.5:"left-continuous"===n?0:"right-continuous"===n?1:NaN:0}export{s as default};
//# sourceMappingURL=index.mjs.map