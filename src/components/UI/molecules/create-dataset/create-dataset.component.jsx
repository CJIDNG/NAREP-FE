import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDatasetStarted } from '@Redux/datasets/create-dataset/create-dataset.actions';
import DatasetModal from '@Components/UI/atoms/modal/edit-modal.component';

const CreateDataset = ({ createDataset }) => {
  const [fileCredentials, setFileCredentials] = useState({
    title: '',
    description: '',
    sector: '',
    file: null,
    tags: []

  });
  const {
    title, description, sector, file, tags
  } = fileCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFileCredentials({ ...fileCredentials, [name]: value });
  };
  const selectedTags = (items) => {
    setFileCredentials({ ...fileCredentials, tags: items });
  };
  const onChangeHandler = (event) => {
    setFileCredentials({ ...fileCredentials, file: event.target.files[0] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('sector', sector);
    formData.append('tags', tags);
    await createDataset(formData);
  };
  return (
    <DatasetModal
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      onChangeHandler={onChangeHandler}
      selectedTags={selectedTags}
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
