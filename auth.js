const jwt = require('jsonwebtoken');
let User = require('./models/user.schema');

exports.userAuth = async (req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Authorization, Accept");

    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Authorization header not found"
        });
    }
    else {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log("user", decoded);
            req.user = decoded;
            const user = await User.findOne({ _id: decoded.userId })
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "Invalid Token"
                });
            }
            next();

        } catch (err) {
            return res.status(401).json({
                status: false,
                message: "Invalid Token"
            });
        }
    }
}
