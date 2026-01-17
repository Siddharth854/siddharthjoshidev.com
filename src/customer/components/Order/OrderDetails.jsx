import React from 'react'
import AddressCard from '../AddressCard/AddressCard.jsx'
import OrderTracker from './OrderTracker.jsx'
import { Grid, Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
  return (
    <div className='lg:p-20 px-5'>
      <div> 
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
      </div> 
      <div className='py-20'>
        <OrderTracker activeStep={3}/> 
      </div>
      <Grid className='space-y-5' container>
        {[1,1,1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>

            <Grid className="w-[55rem]" item xs={6}>
                <div className='flex items-center space-x-5 '>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UhkYFh81v3_Ct2DTi3js1u8BTZMbPHkHZ5uZfn6ILw&s" alt="model" />
                <div className='space-y-2 ml-5'>
                    <p className='font-semibold'>
                        Mid slim mid size top wear
                    </p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold '>
                        <span>
                            Color: Yellow
                        </span>
                        <span>
                            Size: L
                        </span>
                    </p>
                    <p>Seller:lineria</p>
                    <p>₹1089</p>
                </div>
                </div>
            </Grid>

            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"4rem"}} className='px-2 text-5xl' />
                <span >Rate and Review Product</span>
                </Box>
            </Grid>

        </Grid> )}

        

      </Grid>
    </div>
  )
}

export default OrderDetails
