const multer=require("multer")
const storage = multer.diskStorage({
 
    filename: function (req, file, cb) {
      
      const uniqueSuffix = Date.now() 
     
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports=upload