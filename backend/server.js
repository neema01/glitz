import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import products from "./data/products.js";
import productRoutes from './routes/productRoutes.js'
import {notFound,errorHandler} from './middleware/errormiddleware.js'
dotenv.config()

connectDB()


const app = express();
app.get('/',(req,res)=>{
    res.send("API IS RUNNING....")
})

app.use('/api/products',productRoutes);
app.use(notFound)
app.use(errorHandler)




// app.get('/api/products',(req,res)=>{
//     res.json(products);
// })

// app.get('/api/products/:id',(req,res)=>{
//     const product = products.find(p => p.id == req.params.id)
//     res.json(product);
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running IN ${process.env.NODE_ENV} mode on PORT ${PORT}`));
 