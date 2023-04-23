import React from 'react';
import { useGlobalContext } from '../Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useGlobalContext()

    const location = useLocation()

    if(loading) {
        return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }

    if(user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default PrivateRoute;