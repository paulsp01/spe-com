import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const product=ProductModel.GetAll();
        res.status(200).send(product);
    }

    addProduct(req, res){
        console.log("this is a post request");
        res.status(200).send("post request recieved");
    }

    rateProduct(req,res){}

   getoneproduct(req,res){}

}