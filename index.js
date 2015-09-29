/*!
 * capture-stream <https://github.com/doowb/capture-stream>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Capture the output from a stream and store later.
 *
 * ```js
 * var restore = capture(process.stdout);
 * console.log('Hello, world!!!');
 * console.log('foo', 'bar');
 *
 * var output = restore();
 * console.log(output);
 * //=> [ [ 'Hello, world!!!\n' ], [ 'foo bar\n' ] ]
 * ```
 * @param  {Stream} `stream` A stream to capture output from (e.g. `process.stdout`, `process.stderr`)
 * @return {Function} `restore` function that restores normal output and returns an array of output.
 * @api public
 */

module.exports = function captureStream (stream) {
  var output = [];
  var write = stream.write;
  stream.write = function () {
    output.push([].slice.call(arguments));
  };
  return function restore (wantString) {
    stream.write = write;
    return wantString ? output.join('') : output;
  };
};
