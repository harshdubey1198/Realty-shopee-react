import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const username = localStorage.getItem('username');
  return username ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
