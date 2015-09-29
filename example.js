'use strict';

var capture = require('./');
var restore = capture(process.stdout);

console.log('Hello, world!!!');
console.log('foo', 'bar');

var output = restore();
console.log(output);
//=> [ [ 'Hello, world!!!\n' ], [ 'foo bar\n' ] ]

restore = capture(process.stdout);

console.log('Hello, world!!!');
console.log('foo', 'bar');

output = restore(true);
console.log(output);
//=> Hello, world!!!
//=> foo bar
//=>
