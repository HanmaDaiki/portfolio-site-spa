import { useTranslation } from "react-i18next";

import { SectionTitle } from "../../UI/SectionTitle/SectionTitle";

import './Contacts.css';

const Contacts = () => {
  const { t } = useTranslation();

  return(
    <section id='contacts' className='contacts'>
      <SectionTitle>{t('contacts')}</SectionTitle>
      <p className='contacts__paragraph'>
        {t('contacts_p')}
      </p>
      <button className='contacts__button'>{t('contacts_b')}</button>
    </section>
  );
};

export { Contacts };