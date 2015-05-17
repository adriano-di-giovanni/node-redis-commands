'use strict';

// module deps
var
  async = require('async');

// file deps
var
  types = require('./types');

function reporter(redis, asArray, done) {

  if ( ! done) {
    done = asArray;
    asArray = false;
  }

  async.parallel(
    [

      function (callback) {
        redis.info(callback);
      },

      function (callback) {
        redis.command(callback);
      }
    ],

    function (error, results) {

      if (error) {
        return done(error);
      }

      var
        version = /redis_version:(.+)/.exec(results[0])[1],
        commands = results[1].map(function (element) {

          var
            name = element[0],
            command = {
              name: name,
              arity: element[1],
              flags: element[2],
              firstKeyAt: element[3],
              lastKeyAt: element[4],
              step: element[5],
              types: types[name]
            };

          return command;
        }),
        map;

      if ( ! asArray) {

        map = {};

        commands.forEach(function (command) {
          map[command.name] = command;
        });
      }

      done(null, version, map || commands);
    }
  );
}

module.exports = reporter;
