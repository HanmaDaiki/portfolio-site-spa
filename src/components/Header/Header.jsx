import { useTranslation } from 'react-i18next';
import { HashLink as NavLink } from 'react-router-hash-link';

import './Header.css';


const Header = () => {
  const { t } = useTranslation();

  return (
    <header className='header'>
      <nav className='header__navigation'>
        <NavLink
          className='header__link'
          to='#home'
          smooth
        >
          {t('home')}
        </NavLink>
        <NavLink
          className='header__link'
          to='#about'
          smooth
        >
          {t('about')}
        </NavLink>
        <NavLink
          className='header__link'
          to='#skills'
          smooth
        >
          {t('skills')}
        </NavLink>
        <NavLink
          className='header__link'
          to='#portfolio'
          smooth
        >
          {t('portfolio')}
        </NavLink>
        <NavLink
          className='header__link'
          to='#contacts'
          smooth
        >
          {t('contacts')}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
