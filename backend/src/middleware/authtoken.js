const jwt = require('jsonwebtoken');


async function authToken(req, res, next) {
    try {
        const cookieString = req.headers.cookie;
        if (!cookieString) {
            return res.status(401).json({
                message: "Please login...!",
                error: true,
                success: false
            });
        }

        const token = cookieString.split('; ').find(row => row.startsWith('token=')).split('=')[1];

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid or expired token",
                    error: true,
                    success: false
                });
            }


            req.userId = decoded?._id;
            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false,
        });
    }
}

module.exports = authToken;
