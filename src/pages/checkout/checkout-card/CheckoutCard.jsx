import React from "react"
import { NavLink } from "react-router-dom"
import { Box, Grid, TextField, Button } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./Checkout.css"
import { height, width } from "@mui/system";

const Checkout = () => {

    let paymentStyle = {
        position: 'relative',
            height: '60px',
            width: '160px',
            backgroundColor: '#F8F8F8',
            display: 'inline-block',
            marginRight: '20px',
            borderRadius: '10px',
            boxShadow: '3px 3px 7px 0px lightgray',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: '60px',
            fontSize: '20px',
            fontWeight: '500',
            color: 'grey',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                color: 'black',
                transitionDuration: '0.3s',

            }
    }

    return <>
    
    <Grid container spacing={2} >
        <Grid item xs={1} md={1} lg={1} xl={1} style={{}} >         
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    backgroundColor: '#F1F1F1',
                    position: 'fixed',
                    width: '120px',
                    height: '100%',
                    marginTop: '-20px'
                }}>
                <NavLink>
                <CreditScoreIcon sx={{
                    fontSize: '70px',
                    margin: '25px 0px',
                    color: 'rgba(0, 0, 0, 0.54)'
                }} />
                </NavLink>
                <NavLink to={"/checkoutShipping"} >
                <LocalShippingIcon sx={{
                    fontSize: '50px',
                    color: 'rgba(0, 0, 0, 0.54)',
                    margin: '25px 0px',
                    display: 'block'
                }} />
                </NavLink>
                <NavLink to={"/checkoutShipping"}>
                <CheckCircleOutlineIcon sx={{
                    fontSize: '50px',
                    color: 'rgba(0, 0, 0, 0.54)',
                    margin: '25px auto',
                }} />
                </NavLink>  
                </div>
        </Grid>
        
        <Grid item xs={12} md={12} lg={6} xl={7} sx={{padding: '20px'}}>
                <Grid item style={{

                    width: '100%',
                    padding: '30px'
                }} >
                    <h2 style={{fontSize: '40px', fontWeight: 'bolder', margin: '30px 0px', fontFamily: 'Futura Std'}}>
                        FORMA DE PAGAMENTO
                    </h2>
                    <div style={{
                        width: '100%',
                        hieght: '100px ',
                        padding: '10px',
                        boxSizing : 'border-box',
                    }}>
                        <Box sx={paymentStyle}> Card 
                        <input type="radio" id="card-radio" name="card-radio" value="AAA"
                        style={{ 
                            position: 'absolute',
                            left: '10px',
                            top: '10px'
                        }}/>
                        </Box>
                        <Box sx={paymentStyle}> <div id="paypallogo"><input type="radio" id="card-radio" 
                        style={{ 
                            position: 'absolute',
                            left: '10px',
                            top: '10px'
                        }} name="card-radio" value="AAA"/>a</div> </Box>
                       
                    </div>

                    <div style={{
                        display: 'flex',
                    }}>

                    <div id="card-display"> </div>
                    <div id="add-card-display">
                        <div style={{
                            padding: '10px 15px',
                            border: '1px solid grey',
                            borderRadius: '20px',
                            marginBottom : '20px'
                        }}>
                            +
                        </div>
                        Add new
                    </div>                     
                    </div>
                    <div id="txt-card">                      
                        <p style={{
                            color: 'grey',
                            margin: '20px 0px'
                        }} >Nome do titular do cartão</p>
                        <TextField fullWidth style={{borderRadius: '20px !important'}}></TextField>
                                          
                        <div style={{ width: '60%', borderRadius: '20px !important', display: 'inline-block', marginRight: '15px'}}>
                        <p style={{
                            display: 'inline-block',
                            color: 'grey',
                            margin: '20px 0px'
                        }} >
                        Número do cartão
                        </p>  
                        <TextField fullWidth> </TextField>
                        </div>  
                        <div style={{ width: '37%', borderRadius: '20px !important', display: 'inline-block', }}>
                        <p style={{
                            display: 'inline-block',
                            color: 'grey',
                            margin: '20px 0px'
                        }} >
                        Expira em:
                        </p>  
                        <TextField type="date" fullWidth> </TextField>
                        </div> 

                        <div style={{ width: '50%', borderRadius: '20px !important', display: 'inline-block', marginRight: '15px'}}>
                        <p style={{
                            display: 'inline-block',
                            color: 'grey',
                            margin: '20px 0px'
                        }} >
                        CVV
                        </p>  
                        <TextField fullWidth> </TextField>
                        </div>  
                        <div 
                        style={{
                            width: '45%',
                            display: 'inline-block',
                            fontSize: '15px',
                            marginBottom: '-30px',
                            lineHeight: '25px'
                        }}>
                        
                        Ao clicar em confirmar pagamento você afirma que leu e concorda com os termos de uso.
                                             
                        </div> 
                        <div style={{
                        width: '100%',
                        hieght: '100px ',
                        padding: '10px',
                        boxSizing : 'border-box',
                    }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}} >
                        <Box sx={{
                            position: 'relative',
                            height: '100px',
                            width: '260px',
                            backgroundColor: '#F8F8F8',
                            display: 'inline-block',
                            marginRight: '20px',
                            borderRadius: '10px',
                            boxShadow: '3px 3px 7px 0px lightgray',
                            cursor: 'pointer',
                            textAlign: 'center',
                            lineHeight: '100px',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: 'grey',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                color: 'black',
                                transitionDuration: '0.3s',
                            
                            }}}>
                        Cancelar 
                        
                        </Box>
                        
                        <Button variant="contained" style={{height: '100px',
                            width: '460px',}} >
                            CONFIRMAR PAGAMENTO R$XXX,XX
                        </Button>
                       
                        </div>
                    </div>                                   
                    </div>

                    
                </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={5} xl={4} >
                <div 
                id="gridtest"
                style={{                  
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover' ,
                    position: 'fixed',
                    height: '700px',
                    backgroundColor: 'red',
                    width: '37%',
                    marginTop: '-20px'
                }}>
                <div>
                    
                </div>
                </div>
        </Grid>

    </Grid>
    
    
    </>

}

export default Checkout