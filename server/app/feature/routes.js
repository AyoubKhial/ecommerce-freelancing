const controller = require('./controllers');
const auth = require('../../middleware/auth');

module.exports = app => {
    app.post("/api/features", auth, controller.create);
    app.get("/api/features", auth, controller.find);
    app.get("/api/features/:id", auth, controller.findById);
    app.put("/api/features/:id", auth, controller.updateById);
    app.delete("/api/features/:id", auth, controller.deleteById);
};
