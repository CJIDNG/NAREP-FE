/* eslint-disable no-return-assign */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import { signOutStart } from '@Redux/user/user.action';
import { Container } from './header.styles';

const Header = ({ currentUser, signOutStart: logOutUser }) => {
  const role = currentUser ? currentUser.role : null;
  const menuStyles = {
    color: '#fff',
    fontSize: '1.2rem'
  };
  const authStyles = {
    background: 'white',
    color: '#000',
  };
  return (
    <>
      <Container>
        <Menu secondary className="mr-5">
          <Menu.Item
            name="home"
            as={Link}
            to="/"
            style={menuStyles}
          />
          <Menu.Item
            name="datasets"
            as={Link}
            to="/datasets"
            style={menuStyles}
          />
          <Menu.Item
            name="developers"
            style={menuStyles}
            onClick={() => window.open('https://github.com/CJIDNG/NAREP-BE')}

          />
          <Menu.Item
            name="FAAC Facts"
            style={menuStyles}
            onClick={() => window.open('https://faacfacts.ptcij.org/')}
          />
          <Menu.Item
            name="blog"
            as={Link}
            style={menuStyles}
            to="/blog"
          />

          {
            currentUser ? (
              <Menu.Menu position="right">
                {
                  role === 'admin' ? (
                    <Menu.Item
                      name="Admin Dashboard"
                      as={Link}
                      to="/admin-dashboard"
                      style={authStyles}
                    />
                  ) : ''
                }

                <Menu.Item
                  name="logout"
                  as={Link}
                  to="/logout"
                  onClick={logOutUser}
                  style={authStyles}

                />
              </Menu.Menu>
            ) : (
                <Menu.Menu position="right">
                  <Menu.Item
                    name="signin"
                    as={Link}
                    to="/signin"
                    style={menuStyles}

                  />
                  <Menu.Item
                    name="register"
                    as={Link}
                    to="/signup"
                    style={authStyles}

                  />
                </Menu.Menu>
            )
          }
        </Menu>
      </Container>
    </>
  );
};
Header.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.string
  }),
  signOutStart: PropTypes.func.isRequired,
};
Header.defaultProps = {
  currentUser: null
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
