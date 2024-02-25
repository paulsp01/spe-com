// Manage routes/paths to ProductController

// 1. Import express.
import express from "express";
import cartItemsController from './cart.controller.js'
// 2. Initialize Express router.
const cartRouter = express.Router();

const cartController = new cartItemsController();
cartRouter.delete("/:id",cartController.delete);
cartRouter.get("/", cartController.get);
cartRouter.post("/", cartController.add);


export default cartRouter;
