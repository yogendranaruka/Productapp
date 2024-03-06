let User = require('../models/user.schema');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, mobile, email, password, role } = req.body
        const payload = { firstName, lastName, mobile, email, password, role }

        const data = await new User(payload).save();
        res.status(201).json({
            status: true,
            message: 'User registered successfully',
            data
        })
    } catch (err) {
        res.send(err.message)
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });

        res.status(200).json({
            status: true,
            message: 'User logged in successfully',
            data: user, token
        })
    } catch (err) {
        res.send(err.message)
    }
}
