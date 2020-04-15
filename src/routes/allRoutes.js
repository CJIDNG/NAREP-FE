import { lazy } from 'react';
// import PageNotFound from '@Pages/page-not-found/404.component';

const HomePage = lazy(() => import('@Pages/home/home.component'));
const DataSetsPage = lazy(() => import('@Pages/datasets/datasets.component'));
const SingleDataset = lazy(() => import('@Pages/single-dataset/single-dataset.component'));
const AdminPage = lazy(() => import('@Pages/admin/admin.component'));
const SignUpPage = lazy(() => import('@Pages/signup/signup.component'));
const SignInPage = lazy(() => import('@Pages/signin/signin.component'));
const PolicyPaperPage = lazy(() => import('@Pages/policy-papers/policy-papers.component'));
const PageNotFound = lazy(() => import('@Pages/page-not-found/404.component'));

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
  },
  {
    exact: true,
    path: '/admin-dashboard',
    component: AdminPage
  },
  {
    exact: true,
    path: '/policy-papers',
    component: PolicyPaperPage
  },
  {
    component: PageNotFound
  }
  ]
};
