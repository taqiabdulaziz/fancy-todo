const User = require(`../models/User`)
const jwt = require(`jsonwebtoken`)
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("797868802001-b5er38ub084usm145org0u67jhsf4b1u.apps.googleusercontent.com");
module.exports = {
    google: function (req, res) {

        client.verifyIdToken({
            idToken: req.body.token,
            audience: "797868802001-b5er38ub084usm145org0u67jhsf4b1u.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        }).then((ticket) => {
            const payload = ticket.getPayload();
            const userid = payload['sub'];

            User.findOne({ email: payload.email })
                .then((userData) => {
                    
                    if (userData == null) {
                        return User.create({
                            email: payload.email
                        })
                    } else {
                        jwt.sign(payload, process.env.JWT_SECRET, function (err, encoded) {
                            !err ?
                                res.status(200).json({
                                    payload: payload,
                                    jwt_token: encoded,
                                    userId: userData._id
                                }) :
                                res.status(500).json({ msg: `internal server error`, err: err })
                        })
                    }
                }).then((createResult) => {

                    jwt.sign(payload, process.env.JWT_SECRET, function (err, encoded) {
                        !err ?
                            res.status(200).json({
                                payload: payload,
                                jwt_token: encoded,
                                userId: createResult._id
                            }) :
                            res.status(500).json({ msg: `internal server error`, err: err })
                    })
                }).catch((err) => {
                    res.status(500).json(err)
                });


        }).catch((err) => {
            res.status(500).json(err)

        });;

        // If request specified a G Suite domain:
        //const domain = payload['hd'];

    }
};
