const app=require('./backend/app');
const dotenv=require('dotenv');
const connectDatabase = require('./backend/config/databaseConnection');
const cloudinary=require("cloudinary");
// Database connection 
// connectDatabase()



dotenv.config({path:"./backend/config/config.env"});
const Port=process.env.PORT || 4000;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})