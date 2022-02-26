const express=require("express");
const router=express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe=require("stripe")("sk_test_51KVtvCSAOE044odgSYXuZHtPR1Yd59gCH0RuNZ7P5vvUTeCGF0csQDUODAsiHS7yqwDh14Fs8xDzWgMjcXFv4QpQ00xcZyFfxy")
router.post('/placeorder', async (req, res)=>{
    const {token,subtotal,currentUser,cartitems}=req.body;
    try {
        const customer=await stripe.customers.create({
            email: token.email,
            source:token.id
        })

        const payment=await stripe.charges.create({
            amount:subtotal*100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email
        },{
            idempotencyKey : uuidv4()
        })
        if(payment){
            res.send('Payment done')
        }else{
            res.send('Payment failed')
        }
    

    } catch (error) {
        return res.status(400).json({message:'SomeThing went Wrong'})
    }
}
)


module.exports=router;