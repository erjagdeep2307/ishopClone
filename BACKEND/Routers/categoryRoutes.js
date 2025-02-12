const express = require('express');
const fileUpload = require('express-fileupload');
const CategoryController = require('../Controllers/categoryController');
const CategoryRouter = express.Router();
CategoryRouter.get("/:id?",
    CategoryController.read
);
CategoryRouter.post("/create",
    fileUpload(
        {
            createParentPath: true
        }
    ),
    CategoryController.create
);
CategoryRouter.put("/update/:id",
    fileUpload(),
    CategoryController.update
);
CategoryRouter.patch("/update/:id/status",CategoryController.updateStatus);
CategoryRouter.delete("/:id/delete/:image_name",
    CategoryController.moveToTrash
);
module.exports =CategoryRouter;