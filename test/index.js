/* eslint-env mocha, chai */

'use strict';

global.expect = require('chai').expect;

describe('Unit tests', function () {
  require('./reporter')();
});
