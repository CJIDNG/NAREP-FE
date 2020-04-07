import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDatasetStarted } from '@Redux/datasets/delete-dataset/delete-dataset.actions';
import DeleteModal from '@Atoms/modal/delete-modal.component';

const DeleteDataset = ({ slug, deleteDataset }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteDataset({ slug });
  };
  return (
    <DeleteModal handleDelete={handleDelete} />
  );
};
DeleteDataset.propTypes = {
  slug: PropTypes.string.isRequired,
  deleteDataset: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  deleteDataset: (payload) => dispatch(deleteDatasetStarted(payload))
});
export default connect(null, mapDispatchToProps)(DeleteDataset);
