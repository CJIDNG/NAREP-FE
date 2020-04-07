import React, { Suspense } from 'react';
import Spinner from '@Atoms/spinner/spinner.component';
import { ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import BaseRoute from '@Routes/baseRoutes';

const App = () => (
  <Suspense fallback={<Spinner />}>
    <ToastContainer />
    <BaseRoute />
  </Suspense>
);

export default App;
