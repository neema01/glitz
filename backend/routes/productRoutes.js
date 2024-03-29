 import express from 'express'
 import asyncHandler from 'express-async-handler'
 const router = express.Router()
 import Product from '../models/productModel.js'

 //@desc Fetch all products
 //@route GET/ API/PRODUCTS
 //access public
  
  
 router.get('/',asyncHandler(async(req,res)=>{

    const products = await Product.find({})
    res.json(products)
 }))

 //@desc single product
 //@route GET/ API/PRODUCTS/:id
 //access public

 router.get('/:id', asyncHandler(async(req,res)=>{

    const product = await Product.findById ( req.params.id);

    if(product){
    
    
    res.json(product)
    
 }else{


    res.status(404)
    throw new Error('product not found')

 }
})
 )

 export default router
