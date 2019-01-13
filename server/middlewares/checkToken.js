const jwt = require(`jsonwebtoken`)

module.exports = {
    checkToken: function (req, res, next) {
        jwt.verify(req.headers.token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                res.status(400).json(err)
                console.log(err);
                
            } else {
                req.decoded = decoded
                req.userId = req.headers.userid
                next()
            }
        })


    }
};
