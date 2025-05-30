import React from 'react';
import Profile from '../components/Profile';
import ErrorBoundary from '../components/errorcomponents/ErrorBoundary';

const privateRoutes = [
  {
    path: '/profile',
    element: <ErrorBoundary><Profile /></ErrorBoundary>,
  },
];

export default privateRoutes;
