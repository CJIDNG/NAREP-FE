import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ children }) => (
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
      w-full my-10
    "
  >
    { children }
  </button>
);
AuthButton.propTypes = {
  children: PropTypes.string.isRequired,
};
export default AuthButton;
