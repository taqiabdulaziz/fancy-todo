const jwt = require(`jsonwebtoken`)

module.exports = {
    checkToken: function (req, res, next) {
        console.log(req.headers, `HEADER`);

        jwt.verify(req.headers.token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                res.status(400).json(err)

            } else {
                req.decoded = decoded
                next()
            }
        })


    }
};
