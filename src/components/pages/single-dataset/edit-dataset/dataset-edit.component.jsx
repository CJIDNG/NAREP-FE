import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateDatasetStarted } from '@Redux/datasets/update-dataset/update-dataset.actions';
import DataUpload from '../../../UI/molecules/dataset-upload/dataset-upload.component';

const EditDataset = ({
  title: prevTitle, description: prevDesc, updateDataset, slug
}) => {
  const update = async (formData) => updateDataset({ slug, formData });

  return (
    <DataUpload
      onFormSubmit={update}
      title={prevTitle}
      description={prevDesc}
      trigger={<button type="button" className="h-10 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>}
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
