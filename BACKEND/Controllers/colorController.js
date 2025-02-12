const mongoose = require("mongoose");
const ColorModel = require("../Models/colorModel");
const ColorController = {
  create(req, res) {
    const { color_name, color_code } = req.body;
    if (color_name && color_code) {
      ColorModel.findOne({ $or: [{ code: color_code }, { name: color_name }] })
        .then((color) => {
          if (color) {
            res
              .status(200)
              .send({ message: "Color already exists", flag: false });
          } else {
            const color = new ColorModel({
              name: color_name,
              code: color_code,
            });

            color
              .save()
              .then(() => {
                res
                  .status(200)
                  .send({ message: "Color created successfully", flag: true });
              })
              .catch((err) => {
                res.status(503).send({ message: err.message, flag: false });
              });
          }
        })
        .catch((err) => {
          res.status(503).send({ message: err.message, flag: false });
        });
    } else {
      res.status(403).send({ message: "Invalid Request", flag: false });
    }
  },
  read(req, res) {
    try {
      if (req.params.id) {
        const id = req.params.id.trim();
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res
            .status(400)
            .json({ message: "Invalid ID format", flag: false });
        }
        ColorModel.findById(id)
          .then((color) => {
            res.status(200).send({ data: color, flag: true });
          })
          .catch((err) => {
            res.status(503).send({ message: err.message, flag: false });
          });
      } else {
        ColorModel.find()
          .then((colors) => {
            res.status(200).send({ data: colors, flag: true });
          })
          .catch((err) => {
            res.status(503).send({ message: err.message, flag: false });
          });
      }
    } catch (err) {
      res.status(503).send({ message: err.message, flag: false });
    }
  },
  moveToTrash(req, res) {
    if (req.params.id) {
      const id = req.params.id.trim();
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(400)
          .json({ message: "Invalid ID format", flag: false });
      }

      ColorModel.findByIdAndDelete(id)
        .then(() => {
          res
            .status(200)
            .send({ message: "Color has been Deleted", flag: true });
        })
        .catch((err) => {
          res.status(503).send({ message: err.message, flag: false });
        });
    } else {
      res.status(403).send({ message: "Invalid Request", flag: false });
    }
  },
  update(req, res) {
    const { color_name, color_code } = req.body;
    if (req.params.id) {
      const id = req.params.id.trim();
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(400)
          .json({ message: "Invalid ID format", flag: false });
      }
      if (color_name && color_code) {
        ColorModel.findByIdAndDelete(id, { name: color_name, code: color_code })
          .then(() => {
            res
              .status(200)
              .send({ message: "Color has been updated", flag: true });
          })
          .catch((err) => {
            res.status(503).send({ message: err.message, flag: false });
          });
      } else {
        res.status(403).send({ message: "Invalid Request", flag: false });
      }
    } else {
      res.status(403).send({ message: "Invalid Request", flag: false });
    }
  },
  updateStatus(req, res) {
    if (req.params.id) {
      const id = req.params.id.trim();
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(400)
          .json({ message: "Invalid ID format", flag: false });
      }
      const { status } = req.body;
        ColorModel.updateOne(
          {_id:id},
          {$set: {is_active: status} }
          )
          .then((updateItem) => {
            console.log(updateItem);
            if(updateItem.modifiedCount>0){
            res
              .status(200)
              .send({ message: "Color status has been updated", flag: true });
            }
            else{
              res
              .status(403)
              .send({ message: "Record does'nt Exist", flag: false });
            }
          })
          .catch((err) => {
            res.status(503).send({ message: err.message, flag: false });
          });
    } else {
      res.status(403).send({ message: "Invalid Request", flag });
    }
  },
};
module.exports = ColorController;
