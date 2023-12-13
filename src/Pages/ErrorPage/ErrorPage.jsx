import { Button } from '@mui/material';
import error from '../../../public/404_page_cover.jpg'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='md:px-96 md:py-28'>
            <img src={error} alt="" />
            <NavLink to='/'><Button>Go Home</Button></NavLink>
        </div>
    );
};

export default ErrorPage;