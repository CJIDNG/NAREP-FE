import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';
import { Container } from './header.styles';

const Header = () => (
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
      </Menu>
    </Container>
  </>
);

export default Header;
