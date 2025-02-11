const mongoose =require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 70
    },
    slug: {
        type: String,
        required: true,
        maxLength: 70,
    },
    image: {
        type: String,
    },
    price:
    {
        type: Number,
        required: true,
        maxLength: 8
    },
    discount: {
        type: Number,
        required: true,
        maxLength: 3
    },
    actualPrice: {
        type: Number,
        required: true ,
        maxLength: 8   
    },
    is_active: {
        type: Boolean,
        default: true
    },
},
{
    timestamps: true
}
);
const ProductModel = mongoose.model('Product', productSchema);
module.exports=ProductModel;