import React from "react";
import { Box, Grid, Typography, Button  } from "@mui/material";

import Footer from "../components/footer/Footer";

import { productsData, categories } from "../../utils/product-data/productData";
import SideMenu from "../components/side-menu/SideMenu"

import { Link } from "react-router-dom";


import "./Products.css"
import { boxSizing } from "@mui/system";


const Products = () => {

    
    

    let boxProductStyle = {
        position: 'relative',
        width: '100%',
        height: '625px',
        backgroundColor: 'white',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    let divProductStyle = {
        position: 'relative',
        width: '100%',
        height: '625px',
        backgroundColor: 'white',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    }

    return <>

        <div id="main-produtos" >

        
        <Grid container spacing={2} >
            {
                Object.keys(productsData).map((idKey, idx) => {
                    return <Grid key={'produto-key-' + idKey}  item xs={12} sm={6} md={4} xl={4}>
                        <Link 
                        id={idKey}
                        onMouseOver={function changeBg1(event) {
                            event.target.childNodes[0].style.backgroundImage = `url("${productsData[idKey].images[1]}")`
                        } }
                        onMouseOut={function changeBg1(event) {
                            event.target.childNodes[0].style.backgroundImage = `url("${productsData[idKey].images[0]}")`
                        } }
                        className="div-unidades-produtos-catalogo"  style={divProductStyle} to={"/produto/"+ idKey} >
                        <Box className="div-img-produtos" style={{
                            height: '60%',
                            width: '100%',
                            position: 'relative',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url("${productsData[idKey].images[0]}")`,
                                                       
                        }}/>

                        {/* ///// painel de alteração de cor ///// */}
                        <div className="div-cores-produtos">
                            <div  style={{backgroundColor: 'gold'}} className="div-cores-produto-catalogo" />
                            <div  style={{backgroundColor: 'tomato'}} className="div-cores-produto-catalogo" />
                            <div  style={{backgroundColor: 'darkslateblue'}} className="div-cores-produto-catalogo" />
                        </div>


                        {/* Título / Description */}

                        <Typography 
                            className="titulo-box-produtos-catalogo" 
                            variant="h4"
                            component="h2"> 
                                {productsData[idKey].nomeProduto} 
                        </Typography>
                        <Typography 
                            className="description-box-produtos-catalogo" 
                            variant="h6"
                            component="h2"> 
                                {productsData[idKey].description.substring(0, 80)}...
                        </Typography>

                        {/* ///////// Preço / Preço promocional /////////// */}

                        <div className="div-precos-produtos-catalogo" >
                            <div style={{display: 'flex', alignItems:"flex-end", marginBottom: '5px'}}>
                            {
                            productsData[idKey].promo_price ? 
                            <Typography 
                                variant="h4"
                                component="h2"
                                style={{
                                    fontSize: '20px',
                                    marginLeft: '5px'
                                }}>
                        
                            R${productsData[idKey].promo_price},00
                            </Typography>
                            :
                            ""
                            }

                            {
                                productsData[idKey].promo_price ? 
                                <Typography 
                                    variant="h4"
                                    component="h2"
                                    style={{
                                        textDecoration: 'line-through',
                                        fontSize: '15px',
                                        color: 'tomato',
                                    }}>                           
                            R${productsData[idKey].price},00
                            </Typography>
                            :
                            <Typography 
                                variant="h4"
                                component="h2"
                                style={{
                                    fontSize: '20px',
                                    color: 'black',
                                }}>
                            
                            R${productsData[idKey].price},00
                            </Typography>
                            }
                            </div>

                            {/* //////////// Divisão por parcelas */}
                            {
                                productsData[idKey].promo_price ? 
                                <Typography 
                                    variant="h4"
                                    component="h2"
                                >
                                    4 x de R$ {(productsData[idKey].promo_price / 4).toFixed(0)},00
                                </Typography>
                                :
                                <Typography 
                                    variant="h4"
                                    component="h2"
                                >
                                    4 x de R$ {(productsData[idKey].price / 4).toFixed(0)},00
                                </Typography>

                            }
                            
                        </div>

                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '130px',
                                height: '50px',
                                backgroundColor: 'black',
                                boxSizing: 'border-box',
                                border: 'solid grey',
                                borderWidth: '0px 0px 1px 1px',
                                borderRadius: '0px 0px 0px 20px',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '22px',
                                fontWeight: '600',
                                backgroundImage: 'url("https://inhabitat.com/wp-content/blogs.dir/1/files/2016/08/Coma-Cluster-889x499.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}    
                        >

                        - {productsData[idKey].percent} %                          
                        </div>
                        
                        </Link>
                    </Grid>
                })
            }
        </Grid>
        </div>
        <SideMenu id="sideMenu-produtos-catalogo" />
        <Footer/>


    </>
 

}
    





export default Products