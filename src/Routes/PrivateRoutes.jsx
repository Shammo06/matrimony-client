import { Navigate, useLocation } from "react-router";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <CircularProgress color="secondary" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


PrivateRoute.propTypes ={
    children : PropTypes.node
}
export default PrivateRoute;