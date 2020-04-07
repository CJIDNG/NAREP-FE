import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import EditDataFormElements from '@Components/UI/molecules/edit-dataset/edit-dataset-form.component';

const DatasetModal = ({
  handleSubmit, handleChange, onChangeHandler, selectedTags, trigger, ...props
}) => (
    <Modal size="small" trigger={trigger}>
      <form className="w-9/12 mx-auto p-16" onSubmit={handleSubmit}>
        <EditDataFormElements
          {...props}
          handleChange={handleChange}
          onChangeHandler={onChangeHandler}
          selectedTags={selectedTags}
          trigger={trigger}
        />
        <AuthButton>Submit</AuthButton>
      </form>
    </Modal>
);
DatasetModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  selectedTags: PropTypes.func.isRequired,
  trigger: PropTypes.shape({}).isRequired,
};
DatasetModal.defaultProps = {
  title: '',
  description: '',
};
export default DatasetModal;
