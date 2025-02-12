const ProductModel = require("../Models/productModel.js");
const { unlinkSync } = require("fs");
const {uniqueImageName} = require("../Helper/Helper.js");
const { default: mongoose } = require("mongoose");
const ProductController = {
  create(req, res) {
    try {
      if(req.files && req.files.image){
        const image = req.files.image;
        const fileName = uniqueImageName(image.name);
        const dest = `./public/images/${fileName}`;
        image.mv(dest, (err) => { 
          if(err)
          {
             return res.status(503).send({
                message:"Unable to upload image",
                flag:false
              });
          }
          else{
            const { product_name, slug, act_price, discount, original_price,description,color,category} =
            req.body;
            console.log(req.body);
            const product = new ProductModel({
            name: product_name,
            slug: slug,
            price: act_price,
            discount: discount,
            actualPrice: original_price,
            image: fileName,
            description: description,
            color: color,
            category: category,
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
          }
        });
      }
      else{
        return res.status(503).send({
          message:"Image is required",
          flag:false
        });
      }
    } catch (err) {
      console.log("Got Error :", err.message);
      res.status(503).send({
        message: err.message,
        flag: false,
      });
    }
  },
  read(req,res){
    try{
        if(req.params.id){
          const id = (req.params.id)?.trim();
            ProductModel.findById(id)
            .then((data)=>{
              res.send({
                data:data,
                flag:true
              })
            }).catch((err)=>{
              res.status(403).send({
                message:"Product not found",
                flag:false
              })
            })
        }
        else{
          ProductModel.find()
          .then((data)=>{
            res.status(200).send({
              data:data,
              flag:true
            })
          }).catch((err)=>{
            res.status(403).send({
              message:"No Data found",
              flag:false
            })
          })
        }

    }
    catch(err){
      console.log("Got an Err:",err.message);
      res.status(503).send({
        message:err.message,
        flag:false
      });
    }
  },
  updateStatus(req,res){
    try{
        if(req.params.id){
            const id = (req.params.id).trim();
            let status = req.body.status;
            if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({ message: "Invalid ID format",flag:false });
            }
            ProductModel.updateOne(
              {_id:id},
              {$set : {is_active:status}}
            ).then((data)=>{
              if(data.modifiedCount>0){
                res.status(200).send({
                  message:"Status Updated Successfully",
                  flag:true
                })
              }
              else{
                res.status(403).send({
                  message:"Record does'nt Exist",
                  flag:false
                })
              }
            }).catch((err)=>{
              console.log("Update Status Err:",err.message);
              res.status(403).send({
                message:"Failed to Update Status",
                flag:false
              })  
            });
        }
        else{
          res.status(403).send({
            message:"Bad Request",
            flag:false
        });
    }
  }
    catch(err){
      console.log("Got an Err:",err.message);
      res.status(503).send({
        message:err.message,
        flag:false
      });
    }
  },
  moveToTrash(req,res){
      try{
            if(req.params.id){
              const id = (req.params.id).trim();
              if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID format",flag:false });
              }
              ProductModel.findByIdAndDelete(id)
              .then((deletedEntry)=>{
                if(deletedEntry){
                  unlinkSync(`./public/images/${req.params.image_name}`);
                  res.status(200).send({
                    message:"Deleted Successfully",
                    flag:true
                  })
                }
                else{
                  res.status(403).send({
                    message:"Record does'nt Exist",
                    flag:false
                  })
                }
              })
              .catch((err)=>{
                  console.log("Delete Err:",err.message);
                  res.status(403).send({
                    message:"Failed to Delete",
                    flag:false
                  })
              })

            }
      }
      catch(err){
        console.log("Got an Err:",err.message);
        res.status(503).send({
          message:err.message,
          flag:false
        })
      }
  }
};
module.exports = ProductController;
