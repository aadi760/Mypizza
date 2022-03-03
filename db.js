
require('dotenv').config();
const mongoose=require('mongoose');

let mongoUrl=process.env.MONGO_URL;
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true});
let db=mongoose.connection;
 

db.on('connected',()=>{
    console.log('mongoDb connection is succesfull');
})

db.on('error',()=>{
    console.log("mongoDb connection is not successfull");
})


module.exports=mongoose;