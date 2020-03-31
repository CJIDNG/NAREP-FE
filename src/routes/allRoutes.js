import SignUpPage from '@Pages/signup/signup.component';

export const UnauthenticatedRoutes = {
  default: [{
    exact: true,
    path: '/signup',
    component: SignUpPage
  }
  ]
};
