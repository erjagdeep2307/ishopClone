const express = require('express');
const ColorController = require('../Controllers/colorController');
const ColorRouter = express.Router();
ColorRouter.get('/:id?',ColorController.read);
ColorRouter.post('/create',ColorController.create);
ColorRouter.delete("/:id",ColorController.moveToTrash);
ColorRouter.put("/:id",ColorController.update);
ColorRouter.patch("/update/:id/status",ColorController.updateStatus);
module.exports = ColorRouter;

