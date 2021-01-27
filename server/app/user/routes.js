const controller = require('./controllers');

module.exports = app => {
    app.post("/api/users/login", controller.login);
    app.post("/api/users/register", controller.register);
};
