const Redis = require("ioredis");
const redis = new Redis("redis://rapidtax.1laadw.0001.aps1.cache.amazonaws.com:6379");

(async () => {
  redis.set('name', 'Rushabh Shah')
  console.log(await redis.get('name'))
})()
// {
//   host: "rapidtax.1laadw.0001.aps1.cache.amazonaws.com",
//   port: 6379,
//   tls: {}
// }