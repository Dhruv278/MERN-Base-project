const cloudinary=require('cloudinary');

exports.uploadCloudinaryImage=async(imagePath)=>{
  const result= await cloudinary.v2.uploader.upload(imagePath,{
        folder:'Gallery',

    })
    console.log(result)
    return result;
}