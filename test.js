/*!
 * capture-stream <https://github.com/doowb/capture-stream>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var capture = require('./');

describe('capture-stream', function() {
  function log() {
    console.log.apply(console, arguments);
  }

  it('should capture "Hello, world!!!" from stdout and return an array when restore is called with no arguments', function() {
    var restore = capture(process.stdout);
    log('Hello, world!!!');
    var output = restore();
    assert.equal(output.length, 1);
    assert(output[0][0].indexOf('Hello, world!!!') === 0);
  });

  it('should capture "Hello, world!!!" from stdout and return a string when restore is called with a truthy argument', function() {
    var restore = capture(process.stdout);
    log('Hello, world!!!');
    var output = restore(true);
    assert(output === 'Hello, world!!!\n');
  });
});
