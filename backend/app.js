const express=require('express');
const app=express();
const fileUpload=require('express-fileupload')
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const ErrorMiddleware=require('./middlewares/errorMiddlewares');
const { check } = require('./controllers/testController');
const upload = require('./middlewares/multer');

app.use(express.json({limit:'50mb', extended: true}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
// app.use(fileUpload({
//     limits: { fileSize: 50* 1024 * 1024 * 1024 },
//   }));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())


app.post('/image',upload.single('file'),check);


app.use(ErrorMiddleware);

module.exports=app;