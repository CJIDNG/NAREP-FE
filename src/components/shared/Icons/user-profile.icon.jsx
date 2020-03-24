import React from 'react';
import PropTypes from 'prop-types';

const UserProfileIcon = ({ className }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 5.625C6.55273 5.625 7.8125 4.36523 7.8125 2.8125C7.8125 1.25977 6.55273 0 5 0C3.44727 0 2.1875 1.25977 2.1875 2.8125C2.1875 4.36523 3.44727 5.625 5 5.625ZM7.5 6.25H6.42383C5.99023 6.44922 5.50781 6.5625 5 6.5625C4.49219 6.5625 4.01172 6.44922 3.57617 6.25H2.5C1.11914 6.25 0 7.36914 0 8.75V9.0625C0 9.58008 0.419922 10 0.9375 10H9.0625C9.58008 10 10 9.58008 10 9.0625V8.75C10 7.36914 8.88086 6.25 7.5 6.25Z" fill="#939393" />
  </svg>
);
UserProfileIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default UserProfileIcon;
