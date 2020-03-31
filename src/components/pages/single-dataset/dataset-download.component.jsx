/* eslint-disable react/prop-types */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const DownloadFile = ({ fileName, currentUser, history }) => {
  const handleDownload = async (event) => {
    event.preventDefault();
    if (!currentUser) {
      history.push('/signup');
      return false;
    }
    window.open(`${process.env.REACT_APP_API_ROUTE}/files/downloads?filename=${fileName}`);
  };
  return (
    <>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={handleDownload}
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button>
    </>
  );
};

DownloadFile.propTypes = {
  currentUser: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
  fileName: PropTypes.string.isRequired,
};
DownloadFile.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(DownloadFile));
