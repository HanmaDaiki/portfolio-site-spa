import { useTranslation } from 'react-i18next';

import { Skill } from '../Skill/Skill';

import ps from '../../assets/icons/ps.png'
import vec from '../../assets/icons/vec.png';
import ae from '../../assets/icons/ae.png';
import fig from '../../assets/icons/fig.png';

import './Skills.css';
import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id='skills' className='skills'>
      <SectionTitle>{t('skills')}</SectionTitle>
      <p className='skills__paragraph'>{t('skills_p')}</p>
      <div className='skills__list'>
        <Skill image={ps} rating={4} name='Adobe Photoshop'/>
        <Skill image={vec} rating={4} name='Adobe Illustrator'/>
        <Skill image={ae} rating={3} name={<>Adobe <br /> After Effects</>}/>
        <Skill image={fig} rating={4} name='Figma'/>
      </div>
    </section>

  );
}

export default Skills;
