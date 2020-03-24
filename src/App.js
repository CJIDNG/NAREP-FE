import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import BaseRoute from './routes/baseRoutes';

const App = () => (
  <>
    <ToastContainer />
    <BaseRoute />
  </>
);

export default App;
