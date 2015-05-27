/* eslint-env node */
/* eslint quotes: 0, strict: 0 */

/**
 * Generated using `npm run report`
 *
 * Redis version: 3.0.1
 * Date: Wed May 27 2015 16:32:49 GMT+0200 (CEST)
 */

module.exports = {
  "flushall": {
    "name": "flushall",
    "arity": 1,
    "flags": [
      "write"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "sadd": {
    "name": "sadd",
    "arity": -3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "blpop": {
    "name": "blpop",
    "arity": -3,
    "flags": [
      "write",
      "noscript"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -2,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "renamenx": {
    "name": "renamenx",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 2,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "getbit": {
    "name": "getbit",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "select": {
    "name": "select",
    "arity": 2,
    "flags": [
      "readonly",
      "loading",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "bgrewriteaof": {
    "name": "bgrewriteaof",
    "arity": 1,
    "flags": [
      "readonly",
      "admin"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "hgetall": {
    "name": "hgetall",
    "arity": 2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "zincrby": {
    "name": "zincrby",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "type": {
    "name": "type",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "zremrangebyscore": {
    "name": "zremrangebyscore",
    "arity": 4,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "substr": {
    "name": "substr",
    "arity": 4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": []
  },
  "zcount": {
    "name": "zcount",
    "arity": 4,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "debug": {
    "name": "debug",
    "arity": -2,
    "flags": [
      "admin",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "incrby": {
    "name": "incrby",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "sismember": {
    "name": "sismember",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "zrange": {
    "name": "zrange",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "flushdb": {
    "name": "flushdb",
    "arity": 1,
    "flags": [
      "write"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "hget": {
    "name": "hget",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "sunionstore": {
    "name": "sunionstore",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "smove": {
    "name": "smove",
    "arity": 4,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 2,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "rpushx": {
    "name": "rpushx",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "multi": {
    "name": "multi",
    "arity": 1,
    "flags": [
      "readonly",
      "noscript",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "setbit": {
    "name": "setbit",
    "arity": 4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "zrevrangebyscore": {
    "name": "zrevrangebyscore",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "zrangebylex": {
    "name": "zrangebylex",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "sdiff": {
    "name": "sdiff",
    "arity": -2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "hscan": {
    "name": "hscan",
    "arity": -3,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "slaveof": {
    "name": "slaveof",
    "arity": 3,
    "flags": [
      "admin",
      "noscript",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "zrevrank": {
    "name": "zrevrank",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "hset": {
    "name": "hset",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "move": {
    "name": "move",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "sscan": {
    "name": "sscan",
    "arity": -3,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "lset": {
    "name": "lset",
    "arity": 4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "append": {
    "name": "append",
    "arity": 3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "psetex": {
    "name": "psetex",
    "arity": 4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "discard": {
    "name": "discard",
    "arity": 1,
    "flags": [
      "readonly",
      "noscript",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "lpop": {
    "name": "lpop",
    "arity": 2,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "pexpire": {
    "name": "pexpire",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "smembers": {
    "name": "smembers",
    "arity": 2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "zrem": {
    "name": "zrem",
    "arity": -3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "hvals": {
    "name": "hvals",
    "arity": 2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "zscan": {
    "name": "zscan",
    "arity": -3,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "get": {
    "name": "get",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "dbsize": {
    "name": "dbsize",
    "arity": 1,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "sinterstore": {
    "name": "sinterstore",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "lastsave": {
    "name": "lastsave",
    "arity": 1,
    "flags": [
      "readonly",
      "random",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "zadd": {
    "name": "zadd",
    "arity": -4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "hkeys": {
    "name": "hkeys",
    "arity": 2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "exec": {
    "name": "exec",
    "arity": 1,
    "flags": [
      "noscript",
      "skip_monitor"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "scan": {
    "name": "scan",
    "arity": -2,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "setex": {
    "name": "setex",
    "arity": 4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "set": {
    "name": "set",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "expire": {
    "name": "expire",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "scard": {
    "name": "scard",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "ping": {
    "name": "ping",
    "arity": -1,
    "flags": [
      "readonly",
      "stale",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "zremrangebylex": {
    "name": "zremrangebylex",
    "arity": 4,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "role": {
    "name": "role",
    "arity": 1,
    "flags": [
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "zcard": {
    "name": "zcard",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "sdiffstore": {
    "name": "sdiffstore",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "lrange": {
    "name": "lrange",
    "arity": 4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "hsetnx": {
    "name": "hsetnx",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "keys": {
    "name": "keys",
    "arity": 2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "hdel": {
    "name": "hdel",
    "arity": -3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "echo": {
    "name": "echo",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "pfselftest": {
    "name": "pfselftest",
    "arity": 1,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "brpop": {
    "name": "brpop",
    "arity": -3,
    "flags": [
      "write",
      "noscript"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "pttl": {
    "name": "pttl",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "hincrbyfloat": {
    "name": "hincrbyfloat",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "slowlog": {
    "name": "slowlog",
    "arity": -2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "hlen": {
    "name": "hlen",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "hexists": {
    "name": "hexists",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "lpush": {
    "name": "lpush",
    "arity": -3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "getset": {
    "name": "getset",
    "arity": 3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "info": {
    "name": "info",
    "arity": -1,
    "flags": [
      "readonly",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "rpoplpush": {
    "name": "rpoplpush",
    "arity": 3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 2,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "zunionstore": {
    "name": "zunionstore",
    "arity": -4,
    "flags": [
      "write",
      "denyoom",
      "movablekeys"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": [
      "zset"
    ]
  },
  "lrem": {
    "name": "lrem",
    "arity": 4,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "rpush": {
    "name": "rpush",
    "arity": -3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "pexpireat": {
    "name": "pexpireat",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "zrevrange": {
    "name": "zrevrange",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "ttl": {
    "name": "ttl",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "del": {
    "name": "del",
    "arity": -2,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "rename": {
    "name": "rename",
    "arity": 3,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 2,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "bgsave": {
    "name": "bgsave",
    "arity": 1,
    "flags": [
      "readonly",
      "admin"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "decrby": {
    "name": "decrby",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "sunion": {
    "name": "sunion",
    "arity": -2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "shutdown": {
    "name": "shutdown",
    "arity": -1,
    "flags": [
      "readonly",
      "admin",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "incrbyfloat": {
    "name": "incrbyfloat",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "pfcount": {
    "name": "pfcount",
    "arity": -2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hyperloglog"
    ]
  },
  "command": {
    "name": "command",
    "arity": 0,
    "flags": [
      "readonly",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "exists": {
    "name": "exists",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "rpop": {
    "name": "rpop",
    "arity": 2,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "expireat": {
    "name": "expireat",
    "arity": 3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "lindex": {
    "name": "lindex",
    "arity": 3,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "zrank": {
    "name": "zrank",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "zinterstore": {
    "name": "zinterstore",
    "arity": -4,
    "flags": [
      "write",
      "denyoom",
      "movablekeys"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": [
      "zset"
    ]
  },
  "persist": {
    "name": "persist",
    "arity": 2,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "getrange": {
    "name": "getrange",
    "arity": 4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "brpoplpush": {
    "name": "brpoplpush",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "noscript"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 2,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "zscore": {
    "name": "zscore",
    "arity": 3,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "zrevrangebylex": {
    "name": "zrevrangebylex",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "replconf": {
    "name": "replconf",
    "arity": -1,
    "flags": [
      "readonly",
      "admin",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "pfadd": {
    "name": "pfadd",
    "arity": -2,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hyperloglog"
    ]
  },
  "cluster": {
    "name": "cluster",
    "arity": -2,
    "flags": [
      "readonly",
      "admin"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0
  },
  "bitcount": {
    "name": "bitcount",
    "arity": -2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "punsubscribe": {
    "name": "punsubscribe",
    "arity": -1,
    "flags": [
      "readonly",
      "pubsub",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "evalsha": {
    "name": "evalsha",
    "arity": -3,
    "flags": [
      "noscript",
      "movablekeys"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "unsubscribe": {
    "name": "unsubscribe",
    "arity": -1,
    "flags": [
      "readonly",
      "pubsub",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "bitpos": {
    "name": "bitpos",
    "arity": -3,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "psubscribe": {
    "name": "psubscribe",
    "arity": -2,
    "flags": [
      "readonly",
      "pubsub",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "wait": {
    "name": "wait",
    "arity": 3,
    "flags": [
      "readonly",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0
  },
  "config": {
    "name": "config",
    "arity": -2,
    "flags": [
      "readonly",
      "admin",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "publish": {
    "name": "publish",
    "arity": 3,
    "flags": [
      "readonly",
      "pubsub",
      "loading",
      "stale",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "asking": {
    "name": "asking",
    "arity": 1,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0
  },
  "decr": {
    "name": "decr",
    "arity": 2,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "client": {
    "name": "client",
    "arity": -2,
    "flags": [
      "readonly",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "linsert": {
    "name": "linsert",
    "arity": 5,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "spop": {
    "name": "spop",
    "arity": 2,
    "flags": [
      "write",
      "noscript",
      "random",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "subscribe": {
    "name": "subscribe",
    "arity": -2,
    "flags": [
      "readonly",
      "pubsub",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "lpushx": {
    "name": "lpushx",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "ltrim": {
    "name": "ltrim",
    "arity": 4,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "migrate": {
    "name": "migrate",
    "arity": -6,
    "flags": [
      "write"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "llen": {
    "name": "llen",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list"
    ]
  },
  "zlexcount": {
    "name": "zlexcount",
    "arity": 4,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "psync": {
    "name": "psync",
    "arity": 3,
    "flags": [
      "readonly",
      "admin",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "restore-asking": {
    "name": "restore-asking",
    "arity": -4,
    "flags": [
      "write",
      "denyoom",
      "asking"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1
  },
  "save": {
    "name": "save",
    "arity": 1,
    "flags": [
      "readonly",
      "admin",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "latency": {
    "name": "latency",
    "arity": -2,
    "flags": [
      "readonly",
      "admin",
      "noscript",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "setnx": {
    "name": "setnx",
    "arity": 3,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "auth": {
    "name": "auth",
    "arity": 2,
    "flags": [
      "readonly",
      "noscript",
      "loading",
      "stale",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "hmget": {
    "name": "hmget",
    "arity": -3,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "sinter": {
    "name": "sinter",
    "arity": -2,
    "flags": [
      "readonly",
      "sort_for_script"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "watch": {
    "name": "watch",
    "arity": -2,
    "flags": [
      "readonly",
      "noscript",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": []
  },
  "strlen": {
    "name": "strlen",
    "arity": 2,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "sync": {
    "name": "sync",
    "arity": 1,
    "flags": [
      "readonly",
      "admin",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "bitop": {
    "name": "bitop",
    "arity": -4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 2,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "zrangebyscore": {
    "name": "zrangebyscore",
    "arity": -4,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "msetnx": {
    "name": "msetnx",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 2,
    "types": [
      "string"
    ]
  },
  "hmset": {
    "name": "hmset",
    "arity": -4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "pfmerge": {
    "name": "pfmerge",
    "arity": -2,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "hyperloglog"
    ]
  },
  "readwrite": {
    "name": "readwrite",
    "arity": 1,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0
  },
  "sort": {
    "name": "sort",
    "arity": -2,
    "flags": [
      "write",
      "denyoom",
      "movablekeys"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "list",
      "set",
      "zset"
    ]
  },
  "monitor": {
    "name": "monitor",
    "arity": 1,
    "flags": [
      "readonly",
      "admin",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "randomkey": {
    "name": "randomkey",
    "arity": 1,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "incr": {
    "name": "incr",
    "arity": 2,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "mget": {
    "name": "mget",
    "arity": -2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "hincrby": {
    "name": "hincrby",
    "arity": 4,
    "flags": [
      "write",
      "denyoom",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "srandmember": {
    "name": "srandmember",
    "arity": -2,
    "flags": [
      "readonly",
      "random"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "zremrangebyrank": {
    "name": "zremrangebyrank",
    "arity": 4,
    "flags": [
      "write"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "zset"
    ]
  },
  "script": {
    "name": "script",
    "arity": -2,
    "flags": [
      "readonly",
      "noscript"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "srem": {
    "name": "srem",
    "arity": -3,
    "flags": [
      "write",
      "fast"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "set"
    ]
  },
  "mset": {
    "name": "mset",
    "arity": -3,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": -1,
    "step": 2,
    "types": [
      "string"
    ]
  },
  "setrange": {
    "name": "setrange",
    "arity": 4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "string"
    ]
  },
  "time": {
    "name": "time",
    "arity": 1,
    "flags": [
      "readonly",
      "random",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "dump": {
    "name": "dump",
    "arity": 2,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "pfdebug": {
    "name": "pfdebug",
    "arity": -3,
    "flags": [
      "write"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "readonly": {
    "name": "readonly",
    "arity": 1,
    "flags": [
      "readonly",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0
  },
  "restore": {
    "name": "restore",
    "arity": -4,
    "flags": [
      "write",
      "denyoom"
    ],
    "firstKeyAt": 1,
    "lastKeyAt": 1,
    "step": 1,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "eval": {
    "name": "eval",
    "arity": -3,
    "flags": [
      "noscript",
      "movablekeys"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "pubsub": {
    "name": "pubsub",
    "arity": -2,
    "flags": [
      "readonly",
      "pubsub",
      "random",
      "loading",
      "stale"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  },
  "object": {
    "name": "object",
    "arity": 3,
    "flags": [
      "readonly"
    ],
    "firstKeyAt": 2,
    "lastKeyAt": 2,
    "step": 2,
    "types": [
      "hash",
      "hyperloglog",
      "list",
      "set",
      "string",
      "zset"
    ]
  },
  "unwatch": {
    "name": "unwatch",
    "arity": 1,
    "flags": [
      "readonly",
      "noscript",
      "fast"
    ],
    "firstKeyAt": 0,
    "lastKeyAt": 0,
    "step": 0,
    "types": []
  }
};
