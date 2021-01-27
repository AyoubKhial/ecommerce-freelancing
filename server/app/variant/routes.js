const controller = require('./controllers');
const auth = require('../../middleware/auth');

module.exports = app => {
    app.post("/api/variants", auth, controller.create);
    app.get("/api/variants", auth, controller.find);
    app.get("/api/variants/:id", auth, controller.findById);
    app.put("/api/variants/:id", auth, controller.updateById);
    app.delete("/api/variants/:id", auth, controller.deleteById);
};
