import React from 'react';
import Container from '../../UI/Container/Container';
import classes from './Header.module.css'

const Header = () => {
  return (
    <Container>
      <header>
        <div className={classes.Header}>
          <a href="/" id='Home'>Home</a>
          <a href="/" id='About me'>About me</a>
          <a href="/" id='Skills'>Skills</a>
          <a href="/" id='Portfolio'>Portfolio</a>
          <a href="/" id='Contacts'>Contacts</a>
        </div>
      </header>
    </Container>
  );
};

export default Header;
