import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        await jwt.verify(token, process.env.JWT_SECRETE);
        next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            error: "You are not authorized, Please login"
        })
    }
}