<<<<<<< HEAD
import SignUpPage from '@Pages/signup/signup.component';
=======
/* eslint-disable import/prefer-default-export */
import SignUpPage from '../components/signup/signup.component';
>>>>>>> added routes to App

export const UnauthenticatedRoutes = {
  default: [{
    exact: true,
<<<<<<< HEAD
    path: '/signup',
    component: SignUpPage
  }
=======
    path: '/'
  },
  {
    exact: true,
    path: '/signup',
    component: SignUpPage
  }

>>>>>>> added routes to App
  ]
};
