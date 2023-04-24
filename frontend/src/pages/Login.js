
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link, useNavigate} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Slices/UserSlice';
import {toast} from 'react-toastify'

function Login() {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const {userLoggedIn,appErr} = useSelector((state)=>state.userAuth)

    const [formValue,setFormValue]= useState({
        email:'',
        password:'',
    })
    const onChange =(e)=>{
      setFormValue({...formValue,[e.target.name]: e.target.value})
      }  
    const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch(login({formValue,toast,navigate}))
    }
    useEffect(()=>{
      toast.error(appErr)
    })
  return (
    <>
    {!(userLoggedIn?.found) &&
      (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/user/register'} variant="body2">
                { " Do not  have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>)}
      </>
  )
}

export default Login;