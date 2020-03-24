/* eslint-disable import/prefer-default-export */
import SignUpPage from '../components/signup/signup.component';
import SignInPage from '../components/signin/signin.component';
import HomePage from '../pages/home/home.component';
import DataSetsPage from '../pages/datasets/datasets.component';

export const UnauthenticatedRoutes = {
  default: [{
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
  {
    exact: true,
    path: '/datasets',
    component: DataSetsPage
  }
  ]
};
