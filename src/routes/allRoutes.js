/* eslint-disable import/prefer-default-export */
import SignUpPage from '../components/signup/signup.component';

export const UnauthenticatedRoutes = {
  default: [{
    exact: true,
    path: '/'
  },
  {
    exact: true,
    path: '/signup',
    component: SignUpPage
  }

  ]
};
