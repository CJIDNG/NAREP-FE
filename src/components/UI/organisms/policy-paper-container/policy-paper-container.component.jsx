import React from 'react';
import PropTypes from 'prop-types';
import DataSetCollection from '@Molecules/policy-papers-collection/policy-papers-collection';

const PolicyPaperContainer = () => (
  <>
    <DataSetCollection />
  </>
);
PolicyPaperContainer.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
};
PolicyPaperContainer.defaultProps = {
  currentUser: null
};

export default PolicyPaperContainer;
