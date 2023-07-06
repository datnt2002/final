import React from 'react';

import { NotFound, PrivateRoute } from '../components/Common';
import Signin from '../features/Authentication/Signin';
import Signup from '../features/Authentication/Signup';
import ForgotPassword from '../features/Authentication/ForgotPassword';
import AdminHomepage from '../features/Admin/AdminHomepage';

export const publicRoutes = [
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgotpassword', element: <ForgotPassword /> },
  {
    path: '*',
    element: <NotFound />,
  },
  { path: '/testadmin', element: <AdminHomepage /> },
];

export const privateRoutes = [
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <AdminHomepage />
      </PrivateRoute>
    ),
  },
];
