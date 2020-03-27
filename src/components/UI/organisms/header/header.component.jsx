import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
          as={Link}
          to="/"

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
