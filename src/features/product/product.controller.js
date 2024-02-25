import UserModel from "../user/user.model.js";
import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const product = ProductModel.getAll();
    res.status(200).send(product);
  }

  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }

  rateProduct(req, res) {
   const userID= req.query.userID;
   const productID=req.query.productID;
   const rating=req.query.rating;
   const error = ProductModel.rateProduct(userID,productID,rating);
   console.log(error);
   if(error){
     return res.status(401).send(error);
   }else{
     return res.status(200).send("rating is added");
   }
   

  }

  getoneproduct(req, res) {
    const id = req.params.id;
   
    const product = ProductModel.get(id);

    if (!product) {
      res.status(404).send("Product not found");
    } else {
      return res.status(200).send(product);
    }
  }
  filterProducts(req, res) {
    console.log("print" + req.query);
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = ProductModel.filter(minPrice, maxPrice, category);

    res.status(200).send(result);
  }
}
