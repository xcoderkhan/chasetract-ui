/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate to='/dashbord' replace={true}></Navigate>
};

export default PrivateRoute;