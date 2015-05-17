/* eslint-env mocha */
/* global expect */

'use strict';

// module deps
var
  Redis = require('ioredis'),
  semver = require('semver');

// file deps
var
  reporter = require('../lib/reporter');

module.exports = function () {

  describe('reporter', function () {

    it('returns a map', function (done) {

      var
        client = new Redis(),
        callback = function (error, version, commands) {

          client.disconnect();

          expect(semver.valid(version)).to.equal(version);
          /* eslint no-unused-expressions: 0 */
          expect(commands).to.be.an.object;
          done();
        };

        reporter(client, callback);
    });

    it('returns an array', function (done) {

      var
        client = new Redis(),
        callback = function (error, version, commands) {

          client.disconnect();

          expect(semver.valid(version)).to.equal(version);
          /* eslint no-unused-expressions: 0 */
          expect(commands).to.be.an.array;

          console.log(commands);

          done();
        },
        asArray = true;

        reporter(client, asArray, callback);
    });
  });
};
