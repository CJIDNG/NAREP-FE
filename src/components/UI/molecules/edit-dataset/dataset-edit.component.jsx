import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateDatasetStarted } from '@Redux/datasets/update-dataset/update-dataset.actions';
import EditModal from '@Molecules/dataset-upload/dataset-upload.component';

const EditDataset = ({ updateDataset, slug, ...props }) => {
  const update = async (formData) => updateDataset({ slug, formData });
  return (
    <EditModal
      onFormSubmit={update}
      {...props}
      trigger={(
        <button
          type="button"
          className="h-10 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
        >
          Edit
</button>
      )}
    />
  );
};
EditDataset.propTypes = {
  slug: PropTypes.string.isRequired,
  updateDataset: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateDataset: (payload) => dispatch(updateDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditDataset);
