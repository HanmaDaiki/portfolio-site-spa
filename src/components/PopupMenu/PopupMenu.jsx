import { HashLink as NavLink } from "react-router-hash-link";

import './PopupMenu.css'

const PopupMenu = ({ isActive, onCloseMenu }) => {
  return (
    <>
      {
        isActive
          ?
          <div className='popup-menu'>
            <button className='popup-menu__button-close' onClick={onCloseMenu}>
            </button>
            <nav className='popup-menu__navigation'>
              <NavLink
                className='popup-menu__link'
                to='#home'
                smooth
              >
                Home
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#about'
                smooth
              >
                About
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#skills'
                smooth
              >
                Skills
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#portfolio'
                smooth
              >
                Portfolio
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#contacts'
                smooth
              >
                Contacts
              </NavLink>
            </nav>
          </div>
          :
          <></>
      }
    </>
  );
};

export { PopupMenu };