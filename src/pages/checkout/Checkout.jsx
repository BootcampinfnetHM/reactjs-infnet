import React from "react"
import { useEffect } from "react"
import { userIsLoggedIn } from "../../utils/auth/auth"
import { Navigate, useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"


import "./Checkout.css"

const Checkout = () => {

    

    return <>

    <Grid container spacing={2} >

        <Grid item xs={12} md={12} lg={1} xl={1} sx={{bgcolor: 'blue', display: 'flex', justifyContent: 'center'}}>

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

export default Checkout