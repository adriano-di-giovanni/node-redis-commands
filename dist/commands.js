/* eslint-env node */
/* eslint quotes: 0, strict: 0 */

/**
 * Generated using `npm run report`
 *
 * Redis version: 3.0.1
 * Date: Mon Jun 22 2015 09:54:55 GMT+0200 (CEST)
 */

module.exports = {
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
      "hash"
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
      "hash"
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
      "hash"
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
      "hash"
    ]
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
      "hash"
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
      "hash"
    ]
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
  "brpop": {
    "name": "brpop",
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
      "hash"
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
      "hash"
    ]
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
      "hash"
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
  },
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
      "hash"
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
      "hash"
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
      "hash"
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
      "hash"
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
      "hash"
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
  }
};
