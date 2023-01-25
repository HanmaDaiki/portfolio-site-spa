import { SectionTitle } from "../../UI/SectionTitle/SectionTitle";

import './Contacts.css';

const Contacts = () => {
  return(
    <section id='contacts' className='contacts'>
      <SectionTitle>Contacts</SectionTitle>
      <p className='contacts__paragraph'>
        Want to know more or just chat? 
        You are welcome!
      </p>
      <button className='contacts__button'>Send message</button>
    </section>
  );
};

export { Contacts };