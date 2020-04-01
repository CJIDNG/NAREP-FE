import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Modal
} from 'semantic-ui-react';
import { createDatasetStarted } from '@Redux/datasets/create-dataset/create-dataset.actions';
import FormInput from '@Atoms/form-input/form-input.component';
import TextArea from '@Atoms/form-input/form-textarea.component';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import { Title } from '@Atoms/form-input/component.styles';
import FormFile from '@Atoms/form-input/form-file.component';
import Select from '@Atoms/form-input/form-select.component';
import TagsInput from './create-tags.component';

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
    <Modal size="small" trigger={<Button>Create Dataset</Button>}>
      <form className="w-9/12 mx-auto p-16" onSubmit={handleSubmit}>
        <Title>Create new dataset</Title>
        <FormInput
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          label="Title"
          required
        />
        <TextArea
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
          required
        />
        <FormFile
          type="file"
          name="file"
          onChange={onChangeHandler}
        />
        <Select handleChange={handleChange} />
        <TagsInput selectedTags={selectedTags} />
        <AuthButton>Submit</AuthButton>
      </form>
    </Modal>
  );
};
CreateDataset.propTypes = {
  createDataset: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createDataset: (payload) => dispatch(createDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(CreateDataset);
