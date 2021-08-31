whitelist = ['http://localhost:3000', 'http://example2.com']
module.exports = {
    corsOptions: {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
    },
    optionSuccessStatusL: 200,
}
