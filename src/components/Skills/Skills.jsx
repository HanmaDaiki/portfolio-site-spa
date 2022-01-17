import React from 'react';
import Container from '../../UI/Container/Container';
import Skillitem from '../SkillItem/SkillItem';
import Title from '../Title/Title';
import classes from './Skills.module.css'

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <Container>
        <Title>
          <span style={{marginTop: '91px', marginBottom: '69px'}}>Skills</span>
        </Title>
        <span style={{marginBottom: '83px', 
          fontWeight: '500', 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent: 'space-around'}}>
            I work in such programs as
        </span>
        <Skillitem link={'../../assets/icons/ps.jpg'}/>
      </Container>
    </div>
  );
}

export default Skills;
