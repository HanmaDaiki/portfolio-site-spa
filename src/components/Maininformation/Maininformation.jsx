import { useTranslation } from 'react-i18next';

import './Maininformation.css'

const Maininformation = () => {
  const { t, i18n } = useTranslation();
  
  const toEn = () => {
    i18n.changeLanguage('en');
  };

  const toRu = () => {
    i18n.changeLanguage('ru');
  };

  return (
    <section id='home' className='main-information'>
      <div className='main-information__text-block'>
        <h1 className='main-information__title'>{t('name')}</h1>
        <p className='main-information__description'>{t('info_description')}</p>
        <div className='main-information__language'>
          <button className='main-information__button' onClick={toRu}>RU</button>
          |
          <button className='main-information__button' onClick={toEn}>ENG</button>
        </div>
      </div>
      <div className='main-information__photo' />
    </section>
  );
};

export default Maininformation;
