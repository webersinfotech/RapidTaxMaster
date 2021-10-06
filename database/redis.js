const Redis = require("ioredis")

class RedisClass {
    constructor() {
        this.client = new Redis({
            port: 6379, // Redis port
            host: "localhost", // Redis host
        });
    }

    async multipleSet(keys) {
        return this.client.mset(keys)
    }

    async multipleGet(keys) {
        return this.client.mget(keys)
    }

    async get(key) {
        return this.client.get(key)
    }

    async set(key, value) {
        return this.client.set(key, value)
    }
}

module.exports = new RedisClass()