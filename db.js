

const mongoose=require('mongoose');

let mongoUrl=  "mongodb+srv://Aadibad:Aadibad01@cluster0.zy0ek.mongodb.net/mern-pizza";
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true});
let db=mongoose.connection;
 

db.on('connected',()=>{
    console.log('mongoDb connection is succesfull');
})

db.on('error',()=>{
    console.log("mongoDb connection is not successfull");
})


module.exports=mongoose;