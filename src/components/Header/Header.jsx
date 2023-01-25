import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Header.css';


const Header = () => {
  return (

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
          smooth
        >
          Skills
        </NavLink>
        <NavLink
          className='header__link'
          to='#portfolio'
          smooth
        >
          Portfolio
        </NavLink>
        <NavLink
          className='header__link'
          to='#contacts'
          smooth
        >
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
