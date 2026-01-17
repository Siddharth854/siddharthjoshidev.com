import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-medium hover:shadow-2xl border-2xl">
    <Grid className="mt-10 mb-10" container spacing={2} sx={{justifyContent:'space-between'}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='ml-5 w-[8rem] h-[8rem] object-cover object-top' 
                src="https://freakins.com/cdn/shop/files/09june2024_7007-Edit.jpg?v=1749907031&width=500" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className='mb-2'>seoul white pleated women's straight korean pants</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p className='font-semibold'>₹1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-4 text-sm'/>
                <span>
                    Delivered on March 03.
                </span>
            </p>
                <p className='text-xs'>Your item has been Delivered</p>
            </div>
            }
            {false && <div>
                <p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-4 text-sm'/>
                <span>
                    Expected Delivery on March 03.
                </span>
            </p>
            </div>
            }

        </Grid>
    </Grid>
    </div>
    )
}

export default OrderCard
