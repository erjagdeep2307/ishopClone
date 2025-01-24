const ProductModel = require("../Models/productModel.js");
const { unlinkSync } = require("fs");
const uniqueImageName = require("../Helper/Helper.js");
const ProductController = {
  create(req, res) {
    try {
      const { product_name, slug, act_price, discount, original_price } =
        req.body;
      const product = new ProductModel({
        name: product_name,
        slug: slug,
        price: act_price,
        discount: discount,
        actualPrice: original_price,
      });
      product
        .save()
        .then(() => {
          res.status(200).send({
            message: "Product created successfully",
            flag: true,
          });
        })
        .catch((err) => {
        console.log("Got Error :", err.message);
          res.status(503).send({
            message: "Failed to create product",
            flag: false,
          });
        });
    } catch (err) {
      console.log("Got Error :", err.message);
      res.status(503).send({
        message: err.message,
        flag: false,
      });
    }
  },
  // read(req){

  // },
  // update(req,res){

  // },
  // moveToTrash(req,res){

  // }
};
module.exports = ProductController;
