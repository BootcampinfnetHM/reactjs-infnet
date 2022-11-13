import { Avatar, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import { productsCart } from "../../utils/product-data/productsCart";
import { Stack } from "@mui/system";

import "./Cart.css"
import { PanoramaSharp } from "@mui/icons-material";

import { Link } from "react-router-dom"

const Cart = () => {

    const somatorio = [
        [534.00, null],
        [350.00, 407.00],
        [599.00, 735.00]
    ]

    const precoComDesconto = somatorio.reduce((pValue, cValue) => {
        return cValue[0] + pValue 
    }, 0)

    const FullPrice = somatorio.reduce((pValue, cValue) => {

        if(cValue[1] === null) {            
            return cValue[0]
        }

        return cValue[1] + pValue 
    }, 0)


        
    const getElementHeight = () => {
        let getHeight = document.querySelector('#lista-carrinho').offsetHeight
        return getHeight
    }


    return <>

        <Grid container spacing={2} sx={{padding: '5px', boxSizing: 'border-box', backgroundColor: 'lightgrey'}} >

            <Grid item xs={12} md={6} lg={8}>
                <List  id="lista-carrinho" sx={{ width: '100%', padding: '40px 60px', backgroundImage: 'url("https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/07/stephan_s_quintet_nircam_and_miri_imaging/24354379-1-eng-GB/Stephan_s_Quintet_NIRCam_and_MIRI_imaging_pillars.png")', boxSizing: 'border-box',  }}>


                    {
                        
                        Object.keys(productsCart).map((id) =>{
                            return (
                                <ListItem
                                    keu={`listItemCart - ${id}`}
                                    style={{
                                        backgroundColor: 'white',
                                        marginBottom: '10px',
                                        borderRadius: '20px',

                                 }}
                         
                        secondaryAction={
                            <IconButton  >
                                <DeleteIcon/>
                            </IconButton>
                        }
                        alignItems="flex-start"
                    >
                         <ListItemAvatar>
                            <div 
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    backgroundImage: `url("${productsCart[id].images[0]}")`,
                                    backgroundSize: 'cover'
                                }}
                                ></div>
                         </ListItemAvatar>
                         
                         <ListItemText
                        secondary={
                            <Stack sx={{justifyContent: 'space-between'}} direction="row">

                                <Stack sx={{height: '150px', padding: '20px 30px', boxSizing: 'border-box'}} direction="column" >
                                    <Typography
                                            sx={{display: 'inline', textTransform: 'uppercase', fontWeight: '800'}}
                                            component="h6"
                                            variant="h6"
                                            color="text.primary"
                                        >
                                        {productsCart[id].nomeProduto}
                                    </Typography>
                                    <Typography
                                            sx={{display: 'inline', boxSizing: 'border-box'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        {productsCart[id].description.substring(0, 50)}
                                        
                                    </Typography>
                                </Stack>

                                <Stack
                                    sx={{height: '150px', padding: '20px 30px', boxSizing: 'border-box', alignItems: 'center'  }}
                                    direction="row" >
                                
                                {
                            productsCart[id].promo_price ? 
                                <Typography 
                                    variant="h4"
                                    component="h2"
                                    style={{                              
                                        fontWeight: '500',
                                        fontSize: '20px',
                                        marginLeft: '5px',
                                        color: 'black'
                                    }}>
                                    
                                {productsCart[id].promo_price.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'} )}
                                </Typography>
                                :
                                ""
                            }

                            {
                                productsCart[id].promo_price ? 
                                <Typography 
                                    variant="h4"
                                    component="h2"
                                    style={{
                                        textDecoration: 'line-through',
                                        fontSize: '15px',
                                        color: 'tomato',
                                    }}>                           
                            {productsCart[id].price.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'} )}
                            </Typography>
                            :
                            <Typography 
                                variant="h4"
                                component="h2"
                                style={{
                                    fontSize: '20px',
                                    color: 'black',
                                    fontWeight: '500'
                                }}>
                            
                            {productsCart[id].price.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'} )}
                            </Typography>
                            }                              
                            </Stack>
                            <Stack
                                sx={{height: '150px', padding: '20px 30px', boxSizing: 'border-box', marginRight: '50px', }}>
                                <TextField style={{margin: 'auto auto', width: '80px', textAlign: 'center' }}  className="textfield-no-arrows" type="number" placeholder={productsCart[id].quantity}  ></TextField>

                            </Stack>
                          </Stack>      
                        }
                        >
                    </ListItemText>
                         
                    </ListItem>
                            )
                        })
                    }
                                    
                </List>

            </Grid>
            

            <Grid item xs={12} md={6} lg={4} sx={{
                padding: '20px !important',
                boxSizing: 'border-box',
                borderRadius: '20px',
                backgroundColor: 'white'
            }}>
                    <ul id="cart-list" style={{listStyle: 'none', backgroundColor: 'white', padding: '20px', borderRadius: '20px'}} >
                        <li className="li-cart-total">
                            <span>
                                Total:     
                            </span> 

                            <span>

                            {(FullPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </span> 
                        </li>
                        <li className="li-cart-total">
                            <span>
                                Desconto:    
                            </span> 
                            <span style={{color: 'tomato'}}>
                            {(precoComDesconto - FullPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}  
                            </span>
                        </li>
                        <li className="li-cart-total">
                            <span>
                                Subtotal:    
                            </span> 
                            <span>
                            {precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}                                   
                            </span>
                        </li>
                       <Link to="/checkout" style={{textDecoration: 'none'}} >
                            <Button variant="contained" fullWidth>PAGAR</Button>
                       </Link>

                    </ul>
            </Grid>

        </Grid>

    </>

}

export default Cart