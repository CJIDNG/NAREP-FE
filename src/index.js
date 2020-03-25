import React from 'react';
import ReactDOM from 'react-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@Redux/store';
import App from './App';
import './styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    {/* <PersistGate persistor={persistor}>
      <App />
    </PersistGate> */}
    <App />
  </BrowserRouter>
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();
