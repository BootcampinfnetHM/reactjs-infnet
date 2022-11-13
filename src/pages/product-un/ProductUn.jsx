import {
    useEffect,

    } from "react";
import { useParams,
         Link,
        } from "react-router-dom"


import { Grid, Stack, Button, Typography, Chip, TextField } from "@mui/material";

import "./ProductUn.css"

import { productsData, categories } from "../../utils/product-data/productData";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { width } from "@mui/system";

const ProductUn = () => {

    const params = useParams()

    useEffect(() => {
        let thisButtons = Array.from(document.querySelectorAll('.button-switch-images-product-un'))
        let mainDiv = document.querySelector('#main-img-un-produto')
        let arrayAllUrls = []

        thisButtons.forEach((elemento, idx) => {
            elemento.style.display = 'block'
            elemento.style.width = '100%'
            elemento.style.height = '25%'
            elemento.style.backgroundSize = "cover"
            elemento.style.backgroundPosition = "center center"
            elemento.style.border = 'solid grey'
            elemento.style.borderWidth = "0px 1px 1px 0px"
            elemento.style.cursor = 'all-scroll'
            let allUrls = thisButtons[idx].style.getPropertyValue("background-image")
            arrayAllUrls.push(allUrls)
        });

        mainDiv.style.backgroundImage = `url("${productsData[params.id].images[0]}")`
        }, []);

    let changeBGfunc = (event, btns) => {
        let mainDiv = document.querySelector('#main-img-un-produto')

        mainDiv.style.backgroundImage = event.target.style.getPropertyValue("background-image")
        
    }


    return <Grid container spacing={2}  >

        <Grid 
            id="div-display-produto-un"
            item
            xs={12} sm={12} md={6} lg={7} xl={7}
            style={{
                backgroundColor: 'lightgray',
                height:'85vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                id="div-image-un-produto"
                style={{
                    width: '85%',
                    height: '85%',
                    position: 'relative'
                }}
            
            >
                <div 
                    id="main-div-img-un-produto"

                    style={{
                        width: '80%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: 0,
                    }}
                >
                    <div 
                    id="main-img-un-produto"
                    style={{
                        width: '70%',
                        height: '70%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
                </div>
                <div
                    id="imagens-lateral-un-produto"
                    style={{
                        width: '20%',
                        height: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <div style={{ height: '100%', width: '100%', backgroundColor: 'red'}} >

                        <button                            
                            style={{
                                backgroundImage: `url("${productsData[params.id].images[0]}")`, cursor: 'pointer'
                        }}
                            onClick={changeBGfunc}
                            className="button-switch-images-product-un"
                         ></button>
                        <button                            
                            style={{
                                backgroundImage: `url("${productsData[params.id].images[1]}")`,
                                
                        }}
                            onClick={changeBGfunc}                       
                            className="button-switch-images-product-un"
                         ></button>
                         <button                  
                            style={{
                                backgroundImage: `url("${productsData[params.id].images[2]}")`,
                                
                        }}
                            onClick={changeBGfunc}
                            
                            
                            className="button-switch-images-product-un"
                         ></button>
                         <button                            
                            style={{
                                backgroundImage: `url("${productsData[params.id].images[3]}")`,
                                
                            }}
                            onClick={changeBGfunc}
                            
                            
                            className="button-switch-images-product-un"
                         ></button>

                    </div>

                </div>
            </div>


        </Grid>
        <Grid  item xs={12} sm={12} md={6} lg={5} xl={5} id="container-infos-product-un"  >

            <div id="body-infos-product-un" >
                <Typography 
                    variant="h2" 
                    component="h2"
                    style={{fontWeight: '600'}}
                    > {productsData[params.id].nomeProduto} </Typography>

                {productsData[params.id].categories.map(cat => {
                    return (
                        <Chip label={'#' + categories[cat].marca}>   </Chip>
                    )
                    
                    
                })}

                <Typography variant="p" component="p" 
                    style={{
                        textAlign: 'justify',
                        lineHeight: '25px'}} > 
                {productsData[params.id].description.substring(0, 50)}
                </Typography>


                {   
                    
                    productsData[params.id].promo_price ? 
                    <div style={{display: 'flex'}}>
                    <Typography 
                            variant="h4"
                            component="h2"
                            style={{
                                fontSize: '20px',
                                marginLeft: '5px'
                            }}>
                        
                            R${productsData[params.id].promo_price},00
                    </Typography>

                    <Typography 
                    variant="h4"
                    component="h2"
                    style={{
                        textDecoration: 'line-through',
                        fontSize: '15px',
                        color: 'tomato',
                        marginLeft: '10px'
                    
                    }}>
                    
                    R${productsData[params.id].price},00
                    </Typography>
                    </div>
                    :
                    <Typography 
                            variant="h4"
                            component="h2"
                            style={{
                                fontSize: '20px',
                                color: 'black',
                            }}>
                        
                            R${productsData[params.id].price},00
                    </Typography>
                }

                


                <div 
                    id="quantity-counter-produto-un"
                    style={{
                        width: '100%',
                        height: '60px',
                        boxSizing: 'border-box',
                        dispay: 'flex',
                        margin: '30px 0px'

                    }}
                >

                    <Button 
                        onClick={
                            function remove1qantity() {
                                let inputUnProduto = document.querySelector('#input-qtd-un-produtos')

                                if(inputUnProduto.value < 1) {
                                    inputUnProduto.value = 0
                                }
                                else {
                                    inputUnProduto.value = parseInt(inputUnProduto.value) - 1
                                }
                                
                            }
                        }
                        style={{
                            height: '100%',
                            width: '20px',
                            backgroundColor: 'darkgrey',
                            margin: '0px',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '35px',
                            cursor: 'pointer',
                            padding: '0px'
                            
                        }}    
                    >
                        -
                    </Button>

                    <input 
                        id="input-qtd-un-produtos"
                        value="0"
                        type={'number'}
                        style={{
                            height: '100%',
                            width: '100px',
                            margin: '0px',
                            textAlign: 'center',
                        }}
                    ></input>

                    <Button 
                        onClick={
                            function add1qantity() {
                                let inputUnProduto = document.querySelector('#input-qtd-un-produtos')
                                inputUnProduto.value = parseInt(inputUnProduto.value) + 1
                            }
                        }
                        style={{
                            height: '100%',
                            width: '20px',
                            backgroundColor: 'darkgrey',
                            margin: '0px',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '35px',
                            cursor: 'pointer',
                            padding: '0px'
                            
                        }}    
                    >
                        +
                    </Button>





                </div>

                
                <Link style={{textDecoration: 'none'}} to="/cart">
                    <Button id="button-buynow" className="buttons-cart-buynow" variant="outlined" >Comprar agora</ Button>
                </Link>

                <Link style={{textDecoration: 'none'}} to="/cart">
                    <Button  className="buttons-cart-buynow" variant="contained" endIcon={<ShoppingCartOutlined/>}
                        >Adicionar ao carirnho
                    </Button>
                </Link>

            </div>



        </Grid>


    </Grid>





    
    {/* <h1>Produto {params.id}  / {productsData[params.id].nomeProduto}</h1>

    {productsData[params.id].categories.map((categoryId => categories[categoryId].marca)) } */}

   
}

export default ProductUn