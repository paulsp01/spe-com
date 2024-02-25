import cartItemModel from './cart.model.js';


export default class cartItemsController{
    add(req,res){
        const {productID,quantity}=req.query;
        const userID=req.userID;
        cartItemModel.add(userID,productID,quantity);
         res.status(201).send("cart is updated");
    }
    get(req,res){
        const userID=req.userID;
        const items = cartItemModel.get(userID);
        return res.status(200).send(items);
    }
    delete(req,res){
        const userID=req.userID;
        const cartItemID=req.params.id;
        const error = cartItemModel.delete(cartItemID,userID);
        if(error){
            return res.status(401).send(error);
        }else{
            return res.status(200).send("cart item id deleted")
        }
    }
}