import jwt from 'jsonwebtoken';

const jwtAuth=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token){
        return res.status(401).send("Unauthorized");
    }
    try{
    const payload= jwt.verify(token, "ikUGUb34DM");
    req.userID=payload.userID;
    console.log("payload",payload);
    }
    catch(err){
        return res.status(401).send('unauthorized');

    }
    next();

}
export default jwtAuth;