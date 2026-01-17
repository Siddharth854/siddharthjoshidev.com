import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import Button from '@mui/material/Button';

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
          <AddressCard/>
      </div>

      <div>
    <div className='lg:grid grid-cols-3 mt-10 lg:px-16 relative'>
        <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem/>)}
        </div>
        <div className='px-5 sticky top-10 h-[100vh] mt-1 lg:mt-0'>
        <div className='border'>
            <p className='uppeercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr/>
            <div className='space-y-3 font-semibold'>
                <div className='flex justify-between pt-3 text-black'>
                    <span>Price</span>
                    <span>₹4967</span>
                </div>
                <div className='flex justify-between pt-3 text-green-600'>
                    <span>Discout</span>
                    <span className=''>-₹3419</span>
                </div>
                <div className='flex justify-between pt-3 text-green-600'>
                    <span>Delivery Charge</span>
                    <span>Free</span>
                </div>
                <div className='flex justify-between pt-3 font-bold'>
                    <span>Total Amount</span>
                    <span className=' text-red-600'>₹1278</span>
                </div>  
                
            </div>
            <Button variant="contained" className='w-full mt-2' sx={{ px: "5rem", py: ".7rem", bgcolor: "#9155fd", color:"white"}}>
                CHECKOUT
            </Button>
        </div> 
    </div>
    </div>

    </div>



    </div>
  )
}

export default OrderSummary
