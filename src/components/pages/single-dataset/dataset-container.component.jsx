import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import PropTypes from 'prop-types';
import EditDataset from '@Molecules/edit-dataset/dataset-edit.component';
import DeleteDataset from '@Molecules/delete-dataset/dataset-delete.component';
import DatasetPage from './dataset-component';

const DatasetContainer = ({ currentUser, ...singleDataset }) => {
  const role = currentUser ? currentUser.role : null;
  return (
    <div className="flex justify-center">
      <DatasetPage {...singleDataset} />
      <div className="mt-20">
        {
          role === 'admin' ? (
            <>
              <EditDataset {...singleDataset} />
              <DeleteDataset {...singleDataset} />
            </>
          ) : null
        }
      </div>
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
