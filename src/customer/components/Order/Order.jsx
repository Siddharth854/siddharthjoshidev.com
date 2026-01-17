import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
]

const Order = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Grid container spacing={3} alignItems="flex-start">

        {/* LEFT FILTER */}
        <Grid className="mt-8" item xs={12} md={3}>
          <div className="bg-white shadow-md p-5 sticky top-4">
            <h1 className="font-bold text-lg mb-4">Filter</h1>

            <h2 className="font-semibold mb-3">ORDER STATUS</h2>

            <div className="space-y-3">
              {orderStatus.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option.value}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* RIGHT ORDERS */}
        <div className='space-y-5'>
            <Grid item xs={12} md={9}>
            
            {[1,1,1,1,1].map((item)=><OrderCard />)}
          

        </Grid>
        </div>
        

      </Grid>
    </div>
  )
}

export default Order
