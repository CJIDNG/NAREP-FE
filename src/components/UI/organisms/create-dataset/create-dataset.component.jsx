import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDatasetStarted } from '@Redux/datasets/create-dataset/create-dataset.actions';
import BaseDataset from '@Components/UI/molecules/dataset-upload/dataset-upload.component';

const CreateDataset = ({ createDataset }) => {
  const createNewDataset = async (formData) => createDataset(formData);
  return (
    <BaseDataset
      onFormSubmit={createNewDataset}
      trigger={<Button>Create Dataset</Button>}
    />
  );
};
CreateDataset.propTypes = {
  createDataset: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createDataset: (payload) => dispatch(createDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(CreateDataset);
