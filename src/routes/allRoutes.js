import SignUpPage from '@Pages/signup/signup.component';
import SignInPage from '@Pages/signin/signin.component';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/signup',
      component: SignUpPage
    },
    {
      exact: true,
      path: '/signin',
      component: SignInPage
    },
  ]
};
