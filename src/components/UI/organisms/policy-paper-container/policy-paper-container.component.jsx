import React from 'react';
import PropTypes from 'prop-types';
import PolicyPaperCollection from '@Molecules/policy-papers-collection/policy-papers-collection';

const PolicyPaperContainer = () => (
  <>
    <PolicyPaperCollection />
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
