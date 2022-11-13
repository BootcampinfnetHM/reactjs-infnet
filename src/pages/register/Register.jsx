import { useState } from "react";

import { Grid,
         Box,
         Stack,
         Button,
         TextField,
         InputAdornment,
         OutlinedInput,
         IconButton
       } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./Register.css"

import { Link } from "react-router-dom";

const Register = () => {

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
                <Box
                    id="box-register"
                    sx={{
                        width: '100%',
                        height: '85vh',

                        overflow: 'hidden'
                    }}>
                    
                </Box>

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
                    <div id="register-box">


                        <Stack

                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            >

                                <TextField fullWidth variant="outlined" label="Nome de usuário *" />

                                <Grid container>
                                    <Stack direction="row" spacing={2} >
                                        <TextField variant="outlined" label="Nome *" />
                                        <TextField variant="outlined" label="Sobrenome *" />
                                    </Stack>
                                </Grid>

                                <TextField fullWidth variant="outlined" label="E-mail *" />

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
                                        </IconButton>
                                     </InputAdornment>}
                                />

                                <OutlinedInput
                                    placeholder="Repetir senha *" 
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

                                
                                <div id="line-at-login" ></div>

                                <Link
                                    to="/profile"
                                    variant="contained"
                                    style={{
                                        padding: '15px 80px',
                                        backgroundColor: 'black',
                                        fontWeight: '500',
                                        color: 'white',
                                        textDecoration: 'none',
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

export default Register