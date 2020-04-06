import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserStarted } from '@Redux/admin/admin.actions';
import EditModal from '@Atoms/modal/edit-modal.component';

const EditUser = ({ email, onFormSubmit }) => {
  const [userRole, setUserRole] = useState({
    role: ''
  });
  const { role } = userRole;
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name);
    setUserRole({ ...userRole, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await onFormSubmit({ email, role });
  };
  return (
    <EditModal
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      trigger={<button type="button">Edit</button>}
    />
  );
};
EditUser.propTypes = {
  email: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch(updateUserStarted(payload))
});
export default connect(null, mapDispatchToProps)(EditUser);
