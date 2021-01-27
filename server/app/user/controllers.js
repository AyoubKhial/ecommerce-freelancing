const database = require('../../database');
const service = require('./service');

const User = database.users;
const Op = database.Sequelize.Op;

const register = async (req, res) => {
    const user = await User.create(req.body);
    return service.sendTokenResponse({ user, statusCode: 201, res });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) res.status(401).send({ message: 'Invalid credentials.', code: 401 });
    const isMatched = await user.matchPassword(password);
    if (!isMatched) res.status(401).send({ message: 'Invalid credentials.', code: 401 });
    return service.sendTokenResponse({ user, statusCode: 200, res });
};

module.exports = { register, login };
