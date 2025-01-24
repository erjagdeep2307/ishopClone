const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 40
    },
    image:{
        type:String,
        maxLength:150,
        default:null
    },
    slug: {
        type: String,
        maxLength: 40,
        unique: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)
const CategoryModel = mongoose.model("Categories", CategorySchema);
module.exports=CategoryModel;