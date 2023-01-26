import { useTranslation } from 'react-i18next';
import { HashLink as NavLink } from "react-router-hash-link";

import './PopupMenu.css'

const PopupMenu = ({ isActive, onCloseMenu }) => {
  const { t } = useTranslation();
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
                {t('home')}
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#about'
                smooth
              >
                {t('about')}
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#skills'
                smooth
              >
                {t('skills')}
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#portfolio'
                smooth
              >
                {t('portfolio')}
              </NavLink>
              <NavLink
                className='popup-menu__link'
                to='#contacts'
                smooth
              >
                {t('contacts')}
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