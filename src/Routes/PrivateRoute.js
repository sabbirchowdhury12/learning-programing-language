import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center mt-5'>
            <Spinner animation="border" variant="primary" />
        </div>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;

    } else {
        return children;
    }

};

export default PrivateRoute;