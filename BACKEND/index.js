const express = require('express');
const mongoose= require('mongoose');
const cors =require('cors');
const CategoryRouter = require('./Routers/categoryRoutes');
const ProductRouter = require('./Routers/productRoutes.js');
require('dotenv').config();
const app =  express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors(
    {
    origin:["http://localhost:5173"]
}))
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
mongoose.connect(process.env.MONGO_URI,{
    dbName:"Ishop"
}).then(()=>{
    app.listen(5000,()=>{
        console.log(process.env.MONGO_URI);
    })
    console.log("Connected to Database");
}).catch(()=>{
    console.log("Failed to Connect to Database");
})  