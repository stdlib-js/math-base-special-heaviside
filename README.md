<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Heaviside Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [Heaviside function][heaviside-function].

<section class="intro">

The [Heaviside function][heaviside-function] is defined as

<!-- <equation class="equation" label="eq:heaviside_function" align="center" raw="H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function."> -->

```math
H(x) = \begin{cases} 1 & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} 1 &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function.svg" alt="Heaviside function.">
    <br>
</div> -->

<!-- </equation> -->

and is discontinuous at `0`. Depending on the context, the [Heaviside function][heaviside-function] may be defined as a continuous function. To define the [Heaviside function][heaviside-function] such that the function has rotational symmetry,

<!-- <equation class="equation" label="eq:heaviside_function_half_maximum" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function half-maximum."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ \frac{1}{2} & \textrm{if}\ x = 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ \frac{1}{2} &amp; \textrm{if}\ x = 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_half_maximum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_half_maximum.svg" alt="Heaviside function half-maximum.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a left-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_left_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}" alt="Heaviside function left-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \gt 0 \\ 0 & \textrm{if}\ x \leq 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \gt 0 \\ 0 &amp; \textrm{if}\ x \leq 0\end{cases}" data-equation="eq:heaviside_function_left_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_left_continuous.svg" alt="Heaviside function left-continuous.">
    <br>
</div> -->

<!-- </equation> -->

To define the [Heaviside function][heaviside-function] as a right-continuous function,

<!-- <equation class="equation" label="eq:heaviside_function_right_continuous" align="center" raw="H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}" alt="Heaviside function right-continuous."> -->

```math
H(x) = \begin{cases} x & \textrm{if}\ x \geq 0 \\ 0 & \textrm{if}\ x \lt 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="H(x) = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ 0 &amp; \textrm{if}\ x \lt 0\end{cases}" data-equation="eq:heaviside_function_right_continuous">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/heaviside/docs/img/equation_heaviside_function_right_continuous.svg" alt="Heaviside function right-continuous.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import heaviside from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-heaviside@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-heaviside/tags). For example,

```javascript
import heaviside from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-heaviside@v0.2.0-esm/index.mjs';
```

#### heaviside( x\[, continuity] )

Evaluates the [Heaviside function][heaviside-function].

```javascript
var v = heaviside( 3.14 );
// returns 1.0

v = heaviside( -3.14 );
// returns 0.0

v = heaviside( NaN );
// returns NaN
```

The `continuity` parameter may be one of the following values:

-   `'half-maximum'`: if `x == 0`, the function returns `0.5`.
-   `'left-continuous'`: if `x == 0`, the function returns `0.0`.
-   `'right-continuous'`: if `x == 0`, the function returns `1.0`.

By default, the function is discontinuous at `0`.

```javascript
var v = heaviside( 0.0 );
// returns NaN
```

To define the [Heaviside function][heaviside-function] as a continuous function, set the `continuity` parameter.

```javascript
var v = heaviside( 0.0, 'half-maximum' );
// returns 0.5

v = heaviside( 0.0, 'left-continuous' );
// returns 0.0

v = heaviside( 0.0, 'right-continuous' );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import heaviside from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-heaviside@esm/index.mjs';

var x = linspace( -10.0, 10.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'H(%d) = %d', x[ i ], heaviside( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ramp`][@stdlib/math/base/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-heaviside.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-heaviside

[test-image]: https://github.com/stdlib-js/math-base-special-heaviside/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-heaviside/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-heaviside/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-heaviside?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-heaviside.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-heaviside/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-heaviside/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-heaviside/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-heaviside/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-heaviside/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-heaviside/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-heaviside/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-heaviside/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-heaviside/main/LICENSE

[heaviside-function]: https://en.wikipedia.org/wiki/Heaviside_step_function

<!-- <related-links> -->

[@stdlib/math/base/special/ramp]: https://github.com/stdlib-js/math-base-special-ramp/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
