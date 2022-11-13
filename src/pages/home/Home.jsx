import React from "react";
import { Box, Grid } from "@mui/material";
import Footer from "../components/footer/Footer.jsx"
import SideMenu from "../components/side-menu/SideMenu.jsx";

import "./Home.css"
import "../../utils/mediaquery.css"

import videoHome from "../../utils/videos/homeVideo2.mp4"

const Home = () => {

    return (

        <>

        <SideMenu/>


       <div id="main-home">

       
        <Grid container spacing={2}>
            <Grid xl={6} md={6} sm={0} xs={0} item>
                <Grid item id="coluna-esquerda-home">
                    <Box 
                        id="box1-coluna-esquerda-home" 
                        sx={{
                        cursor: 'pointer',
                        width: '100%',
                        height: '880px',
                        '&:hover': {
                            transform: 'scale(0.98)',
                            transitionDuration: '0.5s'
                            }
                    }} >
                    </Box>
                    <Grid  sx={{
                        display: 'flex'
                        
                        }} >
                        <Box 
                            id="box2-coluna-esquerda-home" 
                            sx={{
                            cursor: 'pointer',
                            marginTop: '20px',
                            marginRight: '35px',
                            width: '48%',
                            height: '380px',
                            backgroundColor: 'green',
                            '&:hover': {
                                transform: 'scale(0.98)',
                                transitionDuration: '0.5s'
                                }
                        }} >
                        </Box>
                        <Box 
                            id="box3-coluna-esquerda-home" 
                            sx={{
                            cursor: 'pointer',
                            marginTop: '20px',
                            width: '48%',
                            height: '380px',
                            backgroundColor: 'green',
                            '&:hover': {
                                transform: 'scale(0.98)',
                                transitionDuration: '0.5s'
                                }
                        }} >
                        </Box>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item id="coluna-direita-home" xl={6} md={6} sm={12} xs={12} >
                    
                <Box 
                    id="box4-coluna-direita-home" 
                    sx={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '680px',

                    '&:hover': {
                        transform: 'scale(0.98)',
                        transitionDuration: '0.5s'
                        }
                }}>

                <video width={'100%'} height={'100%'} src={videoHome} autoPlay loop muted />


                </Box>
                <Box 
                    id="box5-coluna-direita-home" 
                    sx={{
                    cursor: 'pointer',
                    marginTop: '20px',
                    width: '100%',
                    height: '580px',
                    backgroundColor: 'orange',
                    '&:hover': {
                        transform: 'scale(0.98)',
                        transitionDuration: '0.5s'
                        }
                }} >
                </Box>
            </Grid>
        </Grid>

        <Footer/>
       </div>
       </>
    )

}

export default Home