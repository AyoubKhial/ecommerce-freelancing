const controller = require("./controllers");
const multer = require("multer");
const auth = require('../../middleware/auth');

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

module.exports = (app) => {
    app.post("/api/brands", auth, upload.single("file"), controller.create);
    app.get("/api/brands", auth, controller.find);
    app.get("/api/brands/:id", auth, controller.findById);
    app.put("/api/brands/:id", auth, upload.single("file"), controller.updateById);
    app.delete("/api/brands/:id", auth, controller.deleteById);
};
