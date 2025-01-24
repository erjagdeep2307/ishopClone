const uniqueImageName=require('../Helper/Helper.js');
const CategoryModel = require('../Models/categoryModel.js');
const { unlinkSync } = require('fs');
const CategoryController = {
    create(req, res) {
        try {
            const image = req.files && req.files.image ? req.files.image : null;
            if (image !== null) {
                const fileName = uniqueImageName(image.name)
                const dest = `./public/images/${fileName}`;
                image.mv(dest, (err) => {
                    if (err) {
                        console.log(err.message);
                        return res.status(503).send({
                            message: "Unable to upload image",
                            flag: false
                        });
                    } else {
                        const { name, slug } = req.body;
                        if (name && slug) {
                            CategoryModel.findOne({ name: name })
                                .then((existingCategory) => {
                                    if (existingCategory) {
                                        return res.status(200).send({
                                            message: "Category already exists",
                                            flag: true
                                        });
                                    } else {
                                        const itemCategory = new CategoryModel({
                                            name: name,
                                            slug: slug,
                                            image: fileName
                                        });
                                        itemCategory.save().then(() => {
                                            res.status(200).send({
                                                message: "Category created successfully",
                                                flag: true
                                            });
                                        }).catch((err) => {
                                            res.status(503).send({
                                                message: err.message,
                                                flag: false
                                            });
                                        });
                                    }
                                }).catch((err) => {
                                    res.status(500).send({
                                        message: err.message,
                                        flag: false
                                    });
                                });
                        }
                        else {
                            res.status(403).send({
                                message: "Invalid Request",
                                flag: false
                            });
                        }
                    }
                })
            }
        } catch (err) {
            res.status(503).send({
                message: err.message,
                flag: false
            });
        }
    },

    read(req, res) {
        try {
            // let categoryData = "";
            if (req.params.id) {
                const id = (req.params.id)?.trim();
                CategoryModel.findById(id)
                    .then((data) => {
                        return res.status(200).send({
                            data: data,
                            flag: true
                        });
                    })
                    .catch((err) => {
                        return res.status(403).send({
                            message: err.message,
                            flag: false
                        });
                    })
            }
            else {
                CategoryModel.find()
                    .then((data) => {
                        return res.send({
                            status: 200,
                            data: data
                        });
                    })
                    .catch(() => {
                        return res.send({
                            status: 404,
                            message: "No data found"
                        });
                    })
            }
        }
        catch (err) {
            console.error(err);
            return res.status(503).send({
                message: err.message,
                flag: false
            });
        }
    },
    update(req, res) {
        try{
                if(req.files){
                    const image = req.files.image;
                    const fileName = uniqueImageName(image.name);
                    const dest = `./public/images/${fileName}`;
                    image.mv(dest, (err) => {
                        if (err) {
                            return res.status(503).send({
                                message: "Unable to upload image",
                                flag: false
                            });
                        }
                    });
                    CategoryModel.findByIdAndUpdate(req.params.id, {
                        name: req.body.name,
                        slug: req.body.slug,
                        image: fileName
                    })
                    .then(() => {
                        res.status(200).send({
                            message: "Category Updated Successfully",
                            flag: true
                        });
                    })
                    .catch((err) => {
                        res.status(503).send({
                            message: err.message,
                            flag: false
                        });
                    })
                }
                else{
                    res.status(403).send({
                        message: "Invalid Request",
                        flag: false
                    });
                }
        }
        catch(err)
        {
            console.error(err);
            return res.status(503).send({
                message: "Internal Server Error",
                flag: false
            });
        }
    },
    moveToTrash(req, res) {
        try {
            if (req.params.id) {
                CategoryModel.findByIdAndDelete(req.params.id)
                    .then((deletedCategory) => {
                        if (deletedCategory) {
                            unlinkSync(`./public/images/${req.params.image_name}`);
                            res.status(200).send({
                                message: "Deleted Successfully",
                                flag: true
                            });
                        } else {
                            res.status(200).send({
                                message: "Invalid Category",
                                flag: false
                            });
                        }
                    })
                    .catch((err) => {
                        res.status(503).send({
                            message: err.message,
                            flag: false
                        });
                    })
            }
            else {
                res.status(500).send({
                    message: "Internal Server Error",
                    flag: false   
                });
            }
        }
        catch (err) {
            console.error(err);
            res.send({
                status: 503,
                message: "System Error"
            });
        }
    }
}
module.exports = CategoryController;
