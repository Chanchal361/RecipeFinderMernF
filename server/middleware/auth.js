const User=require("../models/User");
const jwt =require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config({})

// Middleware to authenticate JWT token

const Authenticate= async (req, res, next) => {
    const token=req.header("Author");
    try {
        if(!token) return res.status(401).json({message:"Login required"});
        
        const decoded=jwt.verify(token, process.env.jwt_secret);
        
        // req.user=decoded.user;
        const id=decoded.userId
        const user=await User.findById(id);
        
        if(!user) return res.status(401).json({message:"User not found"});
        request.user=user;
        next();
        
    } catch (error) {
        res.status(401).json({message:"Token is not valid"});
    }
}

module.exports=Authenticate;