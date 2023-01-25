import { NavHashLink as NavLink } from 'react-router-hash-link';

import Container from '../../UI/Container/Container';

import './Header.css';


const Header = () => {
  return (
    <Container>
      <header className='header'>
        <nav className='header__navigation'>
          <NavLink
            className='header__link'
            to='#home'
            smooth
          >
            Home
          </NavLink>
          <NavLink
            className='header__link'
            to='#about'
            smooth
          >
            About
          </NavLink>
          <NavLink
            className='header__link'
            to='#skills'
          >
            Skills
          </NavLink>
          <NavLink
            className='header__link'
            to='#portfolio'
          >
            Portfolio
          </NavLink>
          <NavLink
            className='header__link'
            to='#contacts'
          >
            Contacts
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
