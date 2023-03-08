/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var randu = require( '@stdlib/random-base-randu' );
var heaviside = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof heaviside, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `0` if `x` is negative', function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = -( randu()*100.0 ) - EPS;
		v = heaviside( x );
		t.equal( isPositiveZero( v ), true, 'returns 0 when provided '+x );
	}
	t.end();
});

tape( 'the function returns `1` if `x` is positive', function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		x = ( randu()*100.0 ) + EPS;
		v = heaviside( x );
		t.equal( v, 1.0, 'returns 1 when provided '+x );
	}
	t.end();
});

tape( 'by default, the function returns `NaN` if provided `+-0`', function test( t ) {
	var v;

	v = heaviside( -0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = heaviside( +0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if the `continuity` option is `half-maximum`, the function returns `0.5` if provided `+-0`', function test( t ) {
	var v;

	v = heaviside( -0.0, 'half-maximum' );
	t.equal( v, 0.5, 'returns 1/2' );

	v = heaviside( +0.0, 'half-maximum' );
	t.equal( v, 0.5, 'returns 1/2' );

	t.end();
});

tape( 'if the `continuity` option is `left-continuous`, the function returns `0.0` if provided `+-0`', function test( t ) {
	var v;

	v = heaviside( -0.0, 'left-continuous' );
	t.equal( isPositiveZero( v ), true, 'returns 0' );

	v = heaviside( +0.0, 'left-continuous' );
	t.equal( isPositiveZero( v ), true, 'returns 0' );

	t.end();
});

tape( 'if the `continuity` option is `right-continuous`, the function returns `1` if provided `+-0`', function test( t ) {
	var v;

	v = heaviside( -0.0, 'right-continuous' );
	t.equal( v, 1, 'returns 1' );

	v = heaviside( +0.0, 'right-continuous' );
	t.equal( v, 1, 'returns 1' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = heaviside( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if provided `-infinity`', function test( t ) {
	var v = heaviside( NINF );
	t.equal( v, 0.0, 'returns 0' );
	t.end();
});

tape( 'the function returns `+1` if provided `+infinity`', function test( t ) {
	var v = heaviside( PINF );
	t.equal( v, 1.0, 'returns 1' );
	t.end();
});
