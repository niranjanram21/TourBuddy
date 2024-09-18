import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    console.log('ProtectedRoute - Authenticated:', isAuthenticated); 

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return children;
};

export default ProtectedRoute;
