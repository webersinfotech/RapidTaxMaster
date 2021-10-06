const Redis = require("ioredis");
const redis = new Redis({
  host: "rapidtax.1laadw.0001.aps1.cache.amazonaws.com",
  port: 6379,
  tls: {}
});