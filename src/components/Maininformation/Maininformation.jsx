import { useTranslation } from 'react-i18next';

import { Translater } from '../../UI/Translater/Translater';

import './Maininformation.css'

const Maininformation = () => {
  const { t } = useTranslation();

  return (
    <section id='home' className='main-information'>
      <div className='main-information__text-block'>
        <h1 className='main-information__title'>{t('name')}</h1>
        <p className='main-information__description'>{t('info_description')}</p>
        <div className='main-information__language'>
          <Translater />
        </div>
      </div>
      <div className='main-information__photo' />
    </section>
  );
};

export default Maininformation;
