const ErrorFormate = require('../utils/ErrorFormate');
const catchAsync=require('./catchError');
const jwt=require('jsonwebtoken');
// const User=require('./../models/user');




exports.isAuthenticatedUser=catchAsync(async(req,res,next)=>{
    const {token}=req.cookies


    if(!token){
        return next(new ErrorFormate('Login first to access this resource',401));

    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    // req.user=await User.findById(decoded.id);
    next()
})