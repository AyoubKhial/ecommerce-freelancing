const controller = require('./controllers');

module.exports = app => {
    app.post("/api/categories", controller.create);
    app.get("/api/categories", controller.find);
    app.get("/api/categories/:id", controller.findById);
    app.put("/api/categories/:id", controller.updateById);
    app.delete("/api/categories/:id", controller.deleteById);
};
