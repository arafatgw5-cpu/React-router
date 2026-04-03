import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './Component/Root.jsx';
import Home from './Component/Home.jsx';
import Mobile from './Component/Mobiles.jsx';
import Laptops from './Component/Laptops.jsx';
import NotFound from './Component/NotFound.jsx';
import SignIn from './Component/SignIn.jsx';
import Profile from './Component/Profile.jsx';
import Products from './Component/Products.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mobiles', element: <Mobile /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'laptops', element: <Laptops /> },
      { path: 'profile', element: <Profile /> },
      { path: 'products', element: <Products /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);