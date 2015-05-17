/* eslint no-multi-str: 0 */

'use strict';

var
  fs = require('fs'),
  path = require('path');

// module deps
var
  Redis = require('ioredis');

// file deps
var
  reporter = require('../lib/reporter');

var
  client = new Redis();

reporter(client, function (error, version, commands) {

  client.disconnect();

  if (error) {
    throw error;
  }

  var
    re = /\?/,
    contents = fs.readFileSync(path.resolve(__dirname, './banner.txt'), { encoding: 'utf8' })
      .replace(re, version)
      .replace(re, (new Date()).toLocaleString())
      .replace(re, JSON.stringify(commands, null, 2));

  fs.writeFile(path.resolve(__dirname, '../dist/commands.js'), contents);
});
