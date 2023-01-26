import { useTranslation } from 'react-i18next';

import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';
import { Container } from '../../UI/Container/Container';

import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className='about'>
      <Container>
        <SectionTitle>{t('about')}</SectionTitle>
        <p className='about__paragraph'>
          {t('about_p1')}
        </p>
        <p className='about__paragraph'>
          {t('about_p2')}
        </p>
        <p className='about__paragraph'>
          {t('about_p3')}
        </p>
      </Container>
    </section>
  );
}

export default About;
