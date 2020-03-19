import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={50}
    width={100}
    timeout={3000}

  />
);
export default Spinner;
