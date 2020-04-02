/* eslint-disable no-return-assign */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '@Redux/user/user.selectors';
import { signOutStart } from '@Redux/user/user.action';
import { Container } from './header.styles';

const Header = ({ currentUser, signOutStart: logOutUser }) => (
  <>
    <Container>
      <Menu secondary className="mr-5">
        <Menu.Item
          name="home"
          as={Link}
          to="/"
        />
        <Menu.Item
          name="datasets"
          as={Link}
          to="/datasets"
        />
        <Menu.Item
          name="developers"
        // onClick={() => window.open('https://github.com/CJIDNG/NAREP-BE')}
        />
        {
          currentUser ? (
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="logout"
                as={Link}
                to="/logout"
                onClick={logOutUser}

              />
            </Menu.Menu>
          ) : (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                <Menu.Item
                  name="signin"
                  as={Link}
                  to="/signin"

                />
                <Menu.Item
                  name="register"
                  as={Link}
                  to="/signup"
                  color="red"

                />
              </Menu.Menu>
          )
        }
      </Menu>
    </Container>
  </>
);
Header.propTypes = {
  currentUser: PropTypes.shape({}),
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
