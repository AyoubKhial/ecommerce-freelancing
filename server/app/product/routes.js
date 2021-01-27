const controller = require('./controllers');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        let filetype = "";
        if (file.mimetype === "image/gif") filetype = "gif";
        if (file.mimetype === "image/png") filetype = "png";
        if (file.mimetype === "image/jpeg") filetype = "jpg";
        cb(null, `image-${Date.now()}.${filetype}`);
    }
});

const upload = multer({ storage: storage });

module.exports = app => {
    app.post("/api/products", upload.single("file"), controller.create);
    app.get("/api/products", controller.find);
    app.get("/api/products/:id", controller.findById);
    app.put("/api/products/:id", controller.updateById);
    app.delete("/api/products/:id", controller.deleteById);
};
