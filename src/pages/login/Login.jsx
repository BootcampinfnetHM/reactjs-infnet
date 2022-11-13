import {React} from "react";
import { useState } from "react";

import "../../utils/mediaquery.css"


import { Grid,
         Box,
         Stack,
         Button,
         TextField,
         InputAdornment,
         OutlinedInput,
         IconButton
       } from "@mui/material";

import { Link } from "react-router-dom";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import "./Login.css"



const Login = () => {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    return<>
        <Grid container spacing={1} >
            <Grid item xs={12} md={7} lg={7} xl={7} >
                <Box id="box-image-login"
                    sx={{
                        width: '100%',
                        height: '85vh',
                        overflow: 'hidden'
                    }}>
                </Box>
                <div id="box-image-login-mobile" ></div>

            </Grid>
            <Grid item xs={12} md={5} lg={5} xl={5} >
                <Box id="main-box-login"
                    sx={{
                        width: '100%',
                        height: '85vh',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                    <div id="login-box">


                        <Stack
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            >
                                <div id="logo-div-login" >
                                    <img width="40px" src="../../utils/imgs/icon-logo-login.png" alt=""></img>
                                </div>

                                <TextField type="email"  fullWidth variant="outlined" label="E-mail *" />

                                <OutlinedInput
                                    placeholder="Senha *" 
                                    onChange={handleChange('password')}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    fullWidth 
                                    variant="outlined"
                                    endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                           edge="end"
                                         >
                                           {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                     </InputAdornment>}
                                />

                                <Button 
                                    variant="contained"
                                    fullWidth
                                    style={{
                                        backgroundColor: '#475dff',
                                        fontWeight: 'bold',
                                        borderRadius: '5px',
                                        padding: '10px 0'

                                    }}
                                >Entrar
                                </Button>

                                <Button 
                                    variant="outlined"
                                    style={{
                                        border: 'none',
                                        width: '100%',
                                        fontWeight: 'bold',
                                        padding: '10px 0',
                                        color: '#475dff'

                                    }}
                                    
                                >Esqueceu a senha?
                                </Button>
                                
                                <div id="line-at-login" ></div>

                                <Link
                                    to="/register"
                                    variant="contained"
                                    
                                    style={{
                                        width:'100%',
                                        backgroundColor: 'black',
                                        fontWeight: '500',
                                        color: 'white',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        padding: '10px 0'



                                    }}
                                    
                                    >
                                    CRIAR CONTA
                                </Link>
                        </Stack>
                    </div>
                </Box>
            </Grid>
        </Grid>
    </>

}

export default Login