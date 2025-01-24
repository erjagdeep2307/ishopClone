const express = require('express');
const fileUpload = require('express-fileupload');
const ProductController = require('../Controllers/productController');
const ProductRouter = express.Router();
ProductRouter.post("/create",
    fileUpload({
        createParentPath: true
    }
    ),
    ProductController.create);
ProductRouter.get("/:id?",ProductController.read);
ProductRouter.delete("/delete/:id/:image_url?",ProductController.moveToTrash);
module.exports = ProductRouter;