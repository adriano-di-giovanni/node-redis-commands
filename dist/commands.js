/* eslint-env node */
/* eslint quotes: 0, strict: 0 */

/**
 * Generated using `npm run build`
 *
 * Redis version: 2.8.19
 * Date: Sun May 17 2015 17:52:24 GMT+0200 (CEST)
 */

module.exports = {
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
  "migrate": {
    "name": "migrate",
    "arity": 6,
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
  "sort": {
    "name": "sort",
    "arity": -2,
    "flags": [
      "write",
      "denyoom"
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
  "restore": {
    "name": "restore",
    "arity": 4,
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
  }
};
