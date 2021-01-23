const controller = require('./controllers');

module.exports = app => {
    app.post("/api/products", controller.create);
    app.get("/api/products", controller.find);
    app.get("/api/products/:id", controller.findById);
    app.put("/api/products/:id", controller.updateById);
    app.delete("/api/products/:id", controller.deleteById);
};
