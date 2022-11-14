import React from "react"
import { NavLink } from "react-router-dom"
import { Grid, } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./Checkout.css"

const CheckoutShipping = () => {

    return <>
    <Grid container spacing={2} >

        <Grid item xs={12} md={12} lg={1} xl={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',    
        }}>
            <div style={{position: 'fixed'}} >
            <NavLink to={"/checkoutCard"} >
            <CreditScoreIcon sx={{
                fontSize: '50px',
                color: 'black',
                margin: '25px 0px',
            }} />
            </NavLink>
            <NavLink to={"/checkoutShipping"} >
            <LocalShippingIcon sx={{
                fontSize: '50px',
                color: 'black',
                margin: '25px 0px',
            }} />
            </NavLink>
            <NavLink >
            <CheckCircleOutlineIcon sx={{
                fontSize: '70px',
                color: 'black',
                margin: '25px auto',
            }} />
            </NavLink> 
            </div> 
        </Grid>
        <Grid item xs={12} md={12} lg={7} xl={7} sx={{bgcolor: 'red', height: '700px'}}>

        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4} id="gridtest" 
            sx={{
                backgroundImage: `url("../../utils/imgs/img-checkout.jpg")`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'            
            }}>

        </Grid>

    </Grid>
    
    
    </>

}

export default CheckoutShipping