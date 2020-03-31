import SignUpPage from '@Pages/signup/signup.component';
import SignInPage from '@Pages/signin/signin.component';
import HomePage from '@Pages/home/home.component';
import DataSetsPage from '@Pages/datasets/datasets.component';
import SingleDataset from '@Pages/single-dataset/single-dataset.component';

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
  },
  {
    exact: true,
    path: '/datasets/:slug',
    component: SingleDataset
  }
  ]
};
