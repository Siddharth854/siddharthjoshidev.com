import React from 'react'
import { TextField, Button, Grid, Box } from '@mui/material'
import AddressCart from '../AddressCard/AddressCard'

function DeliveryAddressForm() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstname:data.get("firstname"),
      lastname:data.get("lastname"),
      address:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipcode:data.get("zipcode"),
      mobile:data.get("phoneno")
      
    }
    console.log("address = ",address);
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scrool">
        <div className='p-5 py-7 border-b cursor-pointer'>
          <AddressCart/>
          <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>Deliver Here</Button>
        </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-10">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={20}>
                <Grid item xs={10} sm={6}>
                  <TextField 
                  required
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                  required
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
              </Grid>
              <Grid item xs={10}>
                  <TextField 
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete='given-name'
                  multiline rows={4}
                  />
                  <Grid item xs={12} sm={6}>
                  <TextField 
                  required
                  id="city"
                  name="city"
                  label="city"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                  required
                  id="state"
                  name="state"
                  label="state"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                </Grid>
          <Grid item xs={12} sm={6}>
                  <TextField 
                  required
                  id="zipcode"
                  name="zipcode"
                  label="Zip Code"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                  required
                  id="mobile"
                  name="mobile"
                  label="Phone Number"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                sx={{mt:2, bgcolor:"RGB(145 85 253)"}}
                size="large"
                variant="contained"
                type='submit'
                >
                  Deliver Here
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
