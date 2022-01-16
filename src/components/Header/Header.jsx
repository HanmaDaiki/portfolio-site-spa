import React from 'react';
import Container from '../../UI/Container/Container';
import Myli from '../../UI/myLi/myLi';
import Myul from '../../UI/myUl/myUl';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <Container>
        <div className={classes.Header}>
          <Myul>
            <Myli>Home</Myli>
            <Myli>About Me</Myli>
            <Myli>Skills</Myli>
            <Myli>Portfolio</Myli>
            <Myli>Contacts</Myli>
          </Myul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
