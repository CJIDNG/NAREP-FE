import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Container } from './header.styles';

const Header = () => {
  const [state, setState] = useState({
    activeItem: 'home'
  });
  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;
  return (
    <Container>
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="datasets"
          active={activeItem === 'datasets'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="developers"
          active={activeItem === 'developers'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="signin"
            active={activeItem === 'signin'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
