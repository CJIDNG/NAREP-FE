/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';
import Validator from '../../utils/validator';
import FormInput from '../shared/form-input/form-input.component';
import CustomButton from '../shared/custom-button/custom-button.component';
import SignupValidation from '../../validations/signup.validation';
import {
  SignUpContainer, SignUpTitle, FormContainer, InputErrors, ToSignin, LinkToSignin
} from './sign-up.styles';

const SignUp = ({ signUpStart: createUserRequest }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userErrors, setUserErrors] = useState({
    errors: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const {
    username, email, password, confirmPassword
  } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { errors, ...others } = userErrors;
    const newFields = { ...others, [name]: value };
    const validatorErrors = new Validator(SignupValidation).validate(newFields);
    setUserErrors({ errors: { ...errors, [name]: validatorErrors[name] }, ...newFields });
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const formValid = (formErrors) => !Object.values(formErrors).filter((val) => !!val).length;
  const { errors } = userErrors;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid(errors)) {
      createUserRequest({
        username, email, password, confirmPassword
      });
    }
    return false;
  };

  return (
    <SignUpContainer>
      <FormContainer onSubmit={handleSubmit}>
        <SignUpTitle>Register Account</SignUpTitle>
        <FormInput
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          label="Username"
        />
        <InputErrors>{ errors.username }</InputErrors>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"

        />
        <InputErrors>{ errors.email }</InputErrors>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <InputErrors>{ errors.password }</InputErrors>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"

        />
        <InputErrors>{ errors.confirmPassword }</InputErrors>
        <CustomButton type="submit">Create my account</CustomButton>

        <ToSignin>
          Already have an account?
          <LinkToSignin to="/signin">Sign in</LinkToSignin>
        </ToSignin>
      </FormContainer>
    </SignUpContainer>
  );
};
SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});
export default connect(null, mapDispatchToProps)(SignUp);
