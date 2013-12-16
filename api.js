var redis = require('redis'),
    client = redis.createClient(),
    shortId = require('shortid'),
    atob = require('atob'),
    btoa = require('btoa');

// Global path for API.
// Can be anything
var PATH = '/api/v1';

client.on("error", function (err) {
    console.log("Error " + err);
});

/**
 * Create New Biome in Redis DB
 * Takes JSON of Biome in and stores it base64 encoded.
 * Id is generated with shortid (https://github.com/dylang/shortid)
 *
 * @param req (express req object)
 * @param res (express res object)
 */
function createBiome(req, res) {
    var data = btoa(JSON.stringify(req.body)),
        id = shortId.generate();

    client.set(id, data, redis.print);

    res.send({'success': id});
}

/**
 * Get Biome from Redis DB by Id
 * URL looks like /get/xJMRLNVYU
 * Query result is decoded from base64
 * and returned as JSON
 *
 * @param req (express req object)
 * @param res (express res object)
 */
function getBiome(req, res) {
    var id = req.params.id;

    client.get(id, function (err, reply) {
        if (err) {
            res.send("{'error': 'not found'}");
        } else {
            res.send(atob(reply.toString()));
        }
    });
}

/**
 * Entry point for API
 * @param app
 */
function routes(app) {
    app.post(PATH + '/create', createBiome);
    app.get(PATH + '/get/:id', getBiome);
}

module.exports = routes;
