const { verify } = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;
    const authorization = req?.headers?.authorization;
    if (authorization?.startsWith('Bearer')) token = authorization.split(' ')[1];
    else if (req?.cookies?.token) token = req?.cookies?.token;
    if (!token) return res.status(401).send({ message: 'Not authorized to access this route', code: 401 });
    try {
        verify(token, 'secret');
        return next();
    } catch (err) {
        return res.status(401).send({ message: 'Not authorized to access this route', code: 401 });
    }
};

module.exports = protect;
