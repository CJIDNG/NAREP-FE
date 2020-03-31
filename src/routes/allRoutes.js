import SignUpPage from '@Pages/signup/signup.component';
import SignInPage from '@Pages/signin/signin.component';
import HomePage from '@Pages/home/home.component';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/',
      component: HomePage
    },
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
