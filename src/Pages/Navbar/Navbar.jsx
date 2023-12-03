import { Button } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../public/logo.png'
import { Link} from "react-router-dom";


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };
    return (
        <div>
             <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Link to='/'>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
                <img src={logo} className='w-10 h-10 rounded-full'  /> Biye Shadi
            </Typography>
            </Link>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Link to='/'> <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                    </Link>
                    <Link to='/biodatas'> <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Biodatas</Typography>
                    </MenuItem>
                    </Link>
                    <Link to='/'> <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">About Us</Typography>
                    </MenuItem>
                    </Link>
                    <Link to='/'> <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Contact Us</Typography>
                    </MenuItem>
                    </Link>
                
                </Menu>
                </Box>

               <Link to='/'>
               <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                >
                BiyeShadi
                <img src={logo} className='w-10 h-10 rounded-full' alt="" />
                </Typography>

               </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/'>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Home
                </Button>
                </Link>
                <Link to='/biodatas'>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Biodatas
                </Button>
                </Link>
                <Link>
                <Button href='/' onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    About Us
                </Button>
                </Link>
                <Link>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Contact Us
                </Button>
                </Link>
                <Link to='/dashboard'>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Dashboard
                </Button>
                </Link>
             
                </Box>
                <Box sx={{ flexGrow: 0 }}>               
                                
                <Link to='/logIn'> <Button variant="contained">LogIn</Button></Link>
                
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                   
                </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
        </div>
    );
};

export default Navbar;