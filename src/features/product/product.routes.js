
//Manage routes/path to productController

import express from 'express';
import ProductController from './product.controller.js';
 
//initialize express router
const productRouter=express.Router();
const productController=new ProductController();

//all the origin paths to the controller methods
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProduct);

export default productRouter;