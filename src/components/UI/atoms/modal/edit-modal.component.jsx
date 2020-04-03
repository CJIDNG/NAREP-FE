import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import FormInput from '@Atoms/form-input/form-input.component';
import TextArea from '@Atoms/form-input/form-textarea.component';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import { Title } from '@Atoms/form-input/component.styles';
import FormFile from '@Atoms/form-input/form-file.component';
import Select from '@Atoms/form-input/form-select.component';
import TagsInput from '@Components/UI/organisms/create-dataset/create-tags.component';

const DatasetModal = ({
  handleSubmit, title, handleChange, description, onChangeHandler, selectedTags, trigger
}) => (
    <Modal size="small" trigger={trigger}>
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
DatasetModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectedTags: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
export default DatasetModal;
