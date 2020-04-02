import React, { useState } from 'react';
import EditDatasetModal from '@Components/UI/atoms/modal/edit-modal.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateDatasetStarted } from '@Redux/datasets/update-dataset/update-dataset.actions';

const EditDataset = ({
  title: prevTitle, description: prevDesc, updateDataset, slug
}) => {
  const [fileCredentials, setFileCredentials] = useState({
    title: prevTitle,
    description: prevDesc,
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
    await updateDataset({ slug, formData });
  };
  return (
    <EditDatasetModal
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      onChangeHandler={onChangeHandler}
      selectedTags={selectedTags}
      trigger={<button type="button" className="h-10 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">   Edit</button>}
    />
  );
};
EditDataset.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  updateDataset: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  updateDataset: (payload) => dispatch(updateDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditDataset);
