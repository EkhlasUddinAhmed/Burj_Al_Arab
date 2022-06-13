import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = (props) => {
    const {children}=props;
    const {loggedInUser}=useAuth();
    const location=useLocation();

    if(!loggedInUser.email) {
        return <Navigate
              to="/login"
              replace
              state={{from:location}}
        
        />
    }
    
    return children;
    
};

export default ProtectedRoute;