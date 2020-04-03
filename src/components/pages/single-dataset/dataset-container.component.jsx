import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import DatasetPage from './dataset-component';
import EditDataset from './edit-dataset/dataset-edit.component';
import DeleteDataset from './delete-dataset/dataset-delete.component';

const DatasetContainer = ({ currentUser, ...singleDataset }) => {
  const role = currentUser ? currentUser.role : null;
  return (
    <div className="flex justify-center">
      <DatasetPage {...singleDataset} />
      {
        role === 'admin' ? (
          <>
            <EditDataset {...singleDataset} />
            <DeleteDataset {...singleDataset} />
          </>
        ) : null
      }

    </div>
  );
};
DatasetContainer.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  })
};
DatasetContainer.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(DatasetContainer);
