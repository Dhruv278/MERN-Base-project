const { uploadCloudinaryImage } = require("../middlewares/cloudinary");

exports.check=async(req,res,next)=>{
    console.log(req.file);
    console.log("done")
    await uploadCloudinaryImage(req.file.path);
    res.status(200).json({
        status:"success",
    })
}