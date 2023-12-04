import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { CircularProgress } from "@mui/material";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <CircularProgress color="secondary" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;