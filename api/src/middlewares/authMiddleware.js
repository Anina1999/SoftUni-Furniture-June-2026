import jwt from 'jsonwebtoken';
import { isTokenInvalid } from '../utils/invalidTokens';

export function authMiddleware(req, res, next) {
    const token = req.headers['x-authorization'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        //simple in memory storage, but no persistance !use mongoDB or redis for best ttl 
        if (isTokenInvalid(token)) {
            return res.status(401).json({ error: 'Token has been invalidated' });
        }

        req.user = decodedToken; 
    } catch (err) {
        return res.status(401).json({ err: 'Invalid token' });
    }

    next();
}

export function isAuth(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
}