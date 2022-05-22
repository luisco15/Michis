import React, { useState } from 'react';
import './Login.css';

// context api
//import { auth, provider } from '../../firebase'
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

// images and icons
import Michis_logo from '../../img/LOGO.png';
//import { Button } from '@material-ui/core';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://michis.com/">
                Michi's
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Login = () => {
    const [state, dispatch] = useStateValue();
    const theme = createTheme();

    const signIn = (event) => {
        // sign in
        /* auth.signInWithPopup(provider)
         .then(result => {
 
             dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user
             });
             console.log(result);
         })
         .catch(error => alert(error.message))*/

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch({
            type: actionTypes.SET_USER,
            user: {
                displayName: data.get('Usuario'),
                photoURL: 'https://i.pinimg.com/736x/fa/53/b1/fa53b16145fbcdbb62249ef20bcbab12.jpg'
            },

        })
        this.props.history.push("/home")
    }

    {/*<div className="login">
        <div className="loginLogo">
            <img src={Michis_logo} alt="Michi´s"/>
        </div>
        <Button type="submit" onClick={signIn}>Ingresar</Button>

        <div className='Demo'><a href='#'>Versión Demo</a></div>
    </div>*/}
    return (
        <div className="login">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar alt="Michi's" src={Michis_logo} sx={{ width: 150, height: 150 }} />

                        <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Usuario"
                                label="Usuario"
                                name="Usuario"
                                autoComplete="Usuario"
                                autoFocus
                                sx={{ background: 'white' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                sx={{ background: 'white' }}
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Ingresar
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <LinkRouter to="/SignUp" variant="body2">
                                        {"No tienes una cuenta? Registrate"}
                                    </LinkRouter>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
            <div className='Demo'><a href='#'>Versión Demo</a></div>

            <Button v1ariant="contained" >Success</Button>
        </div>
    )
}

export default Login;