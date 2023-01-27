import { HashLink as NavLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

import './Navigation.css';


const Navigation = () => {
  const { t } = useTranslation();

  return(
    <nav className='navigation'>
        <NavLink
          className='navigation__link'
          to='#home'
          smooth
        >
          {t('home')}
        </NavLink>
        <NavLink
          className='navigation__link'
          to='#about'
          smooth
        >
          {t('about')}
        </NavLink>
        <NavLink
          className='navigation__link'
          to='#skills'
          smooth
        >
          {t('skills')}
        </NavLink>
        <NavLink
          className='navigation__link'
          to='#portfolio'
          smooth
        >
          {t('portfolio')}
        </NavLink>
        <NavLink
          className='navigation__link'
          to='#contacts'
          smooth
        >
          {t('contacts')}
        </NavLink>
      </nav>
  );
}

export { Navigation };