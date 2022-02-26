import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch} from 'react-redux'
import { placeOrder } from '../actions/orderActions'
function Checkout({subtotal}) {
    const dispatch=useDispatch()
    function tokenHandler(token){
       
      console.log(token )
      dispatch(placeOrder(token,subtotal))

    }
  return (
    <div>

      <StripeCheckout
         amount={subtotal*100}
         shippingAddress
         token={tokenHandler}
         stripeKey="pk_test_51KVtvCSAOE044odgcs9kNgSzG16X4xKmN3rGreZEO7tNoW9SxJPLAuH45heKREE2FIttOQ8cuOrJ6olOVxenm8JC00FVtnRwFd"
         currency='INR'

      >
          <button className='btn'>Pay Now</button>
      </StripeCheckout>

    </div>
  )
}

export default Checkout
