// 1. Import express
import express from "express";
import swagger from "swagger-ui-express";

import productRouter from "./src/features/product/product.routes.js";
import userRouter from './src/features/user/user.routes.js';
import orderRouter from './src/features/order/order.routes.js';
import jwtAuth from "./src/middilewares/jwt.middileware.js";
import cartRouter from './src/features/cart/cart.routes.js';
import  bodyParser from 'body-parser';
import apidocs from './swagger.json' assert {type:'json'};
import loggerMiddileware from './src/middilewares/logger.middileware.js';
import { ApplicationError } from "./src/error-handler/applicationError.js";

// 2. Create Server
const server = express();
server.use(bodyParser.json());
server.use(express.json());
 server.use("/api-docs", swagger.serve, swagger.setup(apidocs));

 server.use(loggerMiddileware);
 server.use("/api/orders", jwtAuth, orderRouter);
//for all request of producr redirect to product route
server.use("/api/products",jwtAuth, productRouter);
server.use("/api/cartItems", jwtAuth,cartRouter);
server.use("/api/users", userRouter);

// 3. Default request handler
server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});
 
server.use((err,req,res,next)=>{
  if (err instanceof ApplicationError){
    res.status(err.code).send(err.message);
  }
  res.status(500).send('somthing went wrong,please try later');
});
server.use((req,res)=>{
  res.status(404).send("API not found");

});

// 4. Specify port.
server.listen(3200, () => {
  console.log("Server is running at 3200");
});
