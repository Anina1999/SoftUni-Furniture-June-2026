import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    const token = req.headers['x-authorization'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedToken; 
    } catch (err) {
        return res.status(401).json({ err: 'Invalid token' });
    }

    next();
}