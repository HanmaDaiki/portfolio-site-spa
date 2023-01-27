import { useTranslation } from "react-i18next";

import './Translater.css';

const Translater = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  } 

  return (
    <div className='translater'>
      <button className='translater__button' onClick={ () => switchLanguage('ru') }>RU</button>
      |
      <button className='translater__button' onClick={ () => switchLanguage('en') }>ENG</button>
    </div>
  );
};

export { Translater };