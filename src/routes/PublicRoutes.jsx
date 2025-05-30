import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },

  {
    path: '/contact',
    element: <Contact/>,
  },
];

export default publicRoutes;
