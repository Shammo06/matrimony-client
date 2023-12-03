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
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const LogIn = () => {
const provider = new GoogleAuthProvider();
const navigate = useNavigate();
const defaultTheme = createTheme();
const {logIn} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password')
        console.log(email,password)
        logIn(email , password)
        .then(result =>console.log(result))
        .catch((error)=>{
            swal(`${error.message}`)
        })
      };
      const handleClick = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user.email)

            navigate(location.state ? location.state : '/')
        })
        .catch(error=>console.log(error.message))
      }
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
                Please Log In
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Your Password"
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
                  Log In
                </Button>
                 <Grid item>
                    <Button  fullWidth variant="contained" onClick={handleClick}>Log in With Google</Button>
                  </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href='/registration' variant="body2">
                      New to BiyeShadi? Sign Up
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

export default LogIn;