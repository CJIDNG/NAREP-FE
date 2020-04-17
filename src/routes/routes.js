import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '@Routes/protectedRoutes';

const HomePage = lazy(() => import('@Pages/home/home.component'));
const DataSetsPage = lazy(() => import('@Pages/datasets/datasets.component'));
const SingleDataset = lazy(() => import('@Pages/single-dataset/single-dataset.component'));
const AdminPage = lazy(() => import('@Pages/admin/admin.component'));
const SignUpPage = lazy(() => import('@Pages/signup/signup.component'));
const SignInPage = lazy(() => import('@Pages/signin/signin.component'));
const PolicyPaperPage = lazy(() => import('@Pages/policy-papers/policy-papers.component'));
const PageNotFound = lazy(() => import('@Pages/page-not-found/404.component'));
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignInPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/datasets" component={DataSetsPage} />
    <Route exact path="/datasets/:slug" component={SingleDataset} />
    <Route exact path="/policy-papers" component={PolicyPaperPage} />

    <ProtectedRoute exact path="/admin-dashboard" component={AdminPage} />

    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
