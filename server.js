const express=require("express");
const app=express();
app.use(express.json());
const db=require("./db");

const Pizza=require('./modals/pizzamodal')
const pizzasRoute=require('./routes/pizzasRoute');
const userRoute=require('./routes/userRoute');
const orderRoute=require('./routes/orderRoute');
const path=require('path')

if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'));
    })
}

app.use('/api/pizzas/',pizzasRoute);
app.use('/api/users/',userRoute);
app.use('/api/orders/',orderRoute);
const port=process.env.PORT||5000;


app.listen(port,()=>`server is running on ${port}`);