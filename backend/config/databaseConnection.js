const mongoose=require('mongoose');

const connectDatabase=()=>{
        mongoose.connect(process.env.DB_CONNECTION_URI).then(con=>{
            console.log('MongoDB Connected');
        })
}

module.exports=connectDatabase