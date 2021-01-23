const controller = require('./controllers');

module.exports = app => {
    app.post("/api/variants", controller.create);
    app.get("/api/variants", controller.find);
    app.get("/api/variants/:id", controller.findById);
    app.put("/api/variants/:id", controller.updateById);
    app.delete("/api/variants/:id", controller.deleteById);
};
