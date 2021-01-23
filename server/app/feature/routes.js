const controller = require('./controllers');

module.exports = app => {
    app.post("/api/features", controller.create);
    app.get("/api/features", controller.find);
    app.get("/api/features/:id", controller.findById);
    app.put("/api/features/:id", controller.updateById);
    app.delete("/api/features/:id", controller.deleteById);
};
