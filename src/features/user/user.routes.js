

//Manage routes/path to productController

import express from 'express';
import   UserController  from './user.controller.js';

 
//initialize express router
const usertRouter=express.Router();
const userController=new UserController();

//all the origin paths to the controller methods

usertRouter.post("/sign-up",userController.signUp);
usertRouter.post("/sign-in",userController.signIn);



export default usertRouter;