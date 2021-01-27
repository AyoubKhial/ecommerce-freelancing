const controller = require('./controllers');
const auth = require('../../middleware/auth');

module.exports = app => {
    app.post("/api/categories", auth, controller.create);
    app.get("/api/categories", auth, auth, controller.find);
    app.get("/api/categories/:id", auth, controller.findById);
    app.put("/api/categories/:id", auth, controller.updateById);
    app.delete("/api/categories/:id", auth, controller.deleteById);
};
