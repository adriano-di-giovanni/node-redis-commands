# node-redis-commands

A Node.js module reporting all commands implemented by Redis.

The module gives you access to

* a [compiled report](#compiledReport)
* and a [reporting function](#reportingFunction).

Reports contain info from Redis [COMMAND](http://redis.io/commands/command) plus data types each command operates on (if applicable).

## Installation

```
npm install node-redis-commands
```

## Usage

### Compiled report <a name="compiledReport"></a>

```javascript
var
    commands = require('node-redis-commands').commands;

console.log(commands.get); // output below

/*
{ name: 'get',
  arity: 2,
  flags: [ 'readonly', 'fast' ],
  firstKeyAt: 1,
  lastKeyAt: 1,
  step: 1,
  types: [ 'string' ] }
*/
```

### Reporting function <a name="reportingFunction"></a>

Reporting function issues a [COMMAND](http://redis.io/commands/command) on a Redis client instance and returns the same list of commands of the compiled report.

This module is client agnostic: you can use your library of choice as long as it exposes both [INFO](http://redis.io/commands/info) and [COMMAND](http://redis.io/commands/command) commands.

```javascript

// module deps
var
    Redis = require('ioredis');
    report = require('node-redis-commands').report;

var
    client = new Redis(),
    callback = function (error, version, commands) {

        client.disconnect();

        if (error) {
            throw error;
        }

        console.log(commands.get); // output below

        /*
        { name: 'get',
          arity: 2,
          flags: [ 'readonly', 'fast' ],
          firstKeyAt: 1,
          lastKeyAt: 1,
          step: 1,
          types: [ 'string' ] }
        */
    };

report(client, callback);
```

If you prefer having the list returned as an array

```javascript

// module deps
var
    Redis = require('ioredis');
    report = require('node-redis-commands').report;

var
    client = new Redis(),
    asArray = true,
    callback = function (error, version, commands) {

        client.disconnect();

        if (error) {
            throw error;
        }

        console.log(commands[0]); // output below

        /*
        { name: 'hlen',
            arity: 2,
            flags: [ 'readonly', 'fast' ],
            firstKeyAt: 1,
            lastKeyAt: 1,
            step: 1,
            types: [ 'set' ] }
        */
    };

report(client, asArray, callback);
```

## Change Log

### 0.1.4

Fix type for commands operating on keys of type hash

### 0.1.3

Update compiled report to Redis 3.0.1

### 0.1.2

Just changed package definition

### 0.1.1

Added `Type` constants

### 0.1.0

Initial release
