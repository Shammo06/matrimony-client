import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { updateProfile } from 'firebase/auth';
import axios from 'axios';



const Registration = () => {
  const {createUser,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
const defaultTheme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password')
        const name = data.get('name');
        const photo = data.get('PhotoURL')
        if (password.length < 6) {
          swal({
              text: "Password should be at least 6 letter",
              timer: 2000
            });
          return
      }
      if (!/[A-Z]/.test(password)) {
          swal({
              text: "Password must contain at least one capital letter",
              timer: 2000
            })
          return
      }
      // if (!/[!@#$%^&*()_+\-={};':"\\|,.<>/?]+/.test(password)){
      //     swal({
      //         text: "Password must contain at least one special character",
      //         timer: 2000
      //       })
      //     return
      // }    

      createUser(email,password)
      .then(result => {
          updateProfile(result.user, {
              displayName: name,
              photoURL:photo
          })
          axios.post('https://matrimony-server-6fqnjdrq2-shammo06.vercel.app/user', {email,role:"regular"})
          .then(res => {
              console.log(res.data)
              if (res.data.insertedId) {
                logOut()
                swal('Successfully Registered Please Log In')
                navigate('/LogIn')  
              }
          })
              
                         
      })
      .catch((error) => {
          const message= error.message
          swal(message)
      })
      };
    
      return (
        <div className="py-10">
          <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs"  style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Your Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="photoURL"
                      label="Photo URL"
                      name="photoURL"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
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
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href='/logIn' variant="body2">
                      Already have an account? Log in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            </Container>
        </ThemeProvider>
        </div>
    );
};

export default Registration;