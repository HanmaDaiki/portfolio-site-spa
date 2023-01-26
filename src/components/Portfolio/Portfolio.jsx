import { useTranslation } from 'react-i18next';

import { Container } from '../../UI/Container/Container';
import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';
import { Project } from '../Project/Project';

import braun from '../../assets/images/braun.jpg';
import levis from '../../assets/images/levis.jpg';
import reebok from '../../assets/images/reebok.jpg';

import './Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();

  return(
    <section id='portfolio' className='portfolio'>
      <Container>
        <SectionTitle>{t('portfolio')}</SectionTitle>
        <div className='portfolio__projects'>
          <Project image={levis} name='Online fashion store - Homepage'/>
          <Project image={reebok} name='Reebok Store - Concept'/>
          <Project image={braun} name='Braun Landing Page - Concept'/>
        </div>
      </Container>
    </section>
  );
};

export { Portfolio };
