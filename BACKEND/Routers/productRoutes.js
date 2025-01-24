const express = require('express');
const ProductController = require('../Controllers/productController');
const ProductRouter = express.Router();
ProductRouter.post("/create",ProductController.create);
module.exports = ProductRouter;