import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';

import './About.css';

const About = () => {

  return (
    <section id='about' className='about'>
      <div className='about__container'>
        <SectionTitle>About me</SectionTitle>
        <p className='about__paragraph'>
          Hi, I'm Denis – UX/UI designer from Minsk.
          I'm interested in design and everything connected with it.
        </p>
        <p className='about__paragraph'>
          I'm studying at courses "Web and mobile design
          interfaces" in IT-Academy.
        </p>
        <p className='about__paragraph'>
          Ready to implement excellent projects
          with wonderful people.
        </p>
      </div>
    </section>
  );
}

export default About;
