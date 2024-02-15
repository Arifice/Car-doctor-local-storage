import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();   
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRouter;