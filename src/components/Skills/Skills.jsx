import { Skill } from '../Skill/Skill';

import ps from '../../assets/icons/ps.png'
import vec from '../../assets/icons/vec.png';
import ae from '../../assets/icons/ae.png';
import fig from '../../assets/icons/fig.png';

import './Skills.css';
import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';

const Skills = () => {
  return (

    <section id='skills' className='skills'>
      <SectionTitle>Skills</SectionTitle>
      <p className='skills__paragraph'>I work in such programs as</p>
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
