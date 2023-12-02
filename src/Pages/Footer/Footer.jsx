
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import logo from '../../../public/logo.png'


const Footer = () => {
    return (
       <Container>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
         <Typography variant='h6' sx={{margin:'10px'}}>
         <Typography variant='h4' sx={{margin:'10px'}}>BiyeShadi.com</Typography>
         <img src={logo} className='w-10 h-10 rounded-full'/> Best in world
         </Typography>
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant='h4' sx={{margin:'10px'}}>Services</Typography> 
          <Typography variant='h6' sx={{margin:'10px'}}>Branding</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Design</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Marketing</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Advertisement</Typography>
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant='h4' sx={{margin:'10px'}} >Company</Typography> 
          <Typography variant='h6' sx={{margin:'10px'}}>About us</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Contact</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Jobs</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Press kit</Typography>
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant='h4' sx={{margin:'10px'}}>Legal</Typography> 
          <Typography variant='h6' sx={{margin:'10px'}}>Terms of use</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Privacy policy</Typography>
          <Typography variant='h6' sx={{margin:'10px'}}>Cookie policy</Typography>
        </Grid>
        </Grid>
       
        </Container>
    );
};

export default Footer;