// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,t){return function(n){return n!=n}(n)?NaN:n>0?1:0===n?"half-maximum"===t?.5:"left-continuous"===t?0:"right-continuous"===t?1:NaN:0}export{n as default};
//# sourceMappingURL=mod.js.map
