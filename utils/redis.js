const {createClient}  = require('redis')
const redis = require("redis")

const client = redis.createClient({ legacyMode: true });
async function test(){
    await client.connect().then(()=>{
        console.log("redis connected");
    })
    client.on('error', (err) => console.log('Redis Client Error', err));
}
test()
module.exports = client;