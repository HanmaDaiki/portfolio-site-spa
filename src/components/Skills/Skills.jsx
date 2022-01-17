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
        <Skillitem abbreviation={"ps"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>Photoshop</span>}/>
        <Skillitem abbreviation={"ai"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>Illustrator</span>}/>
        <Skillitem abbreviation={"ae"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>After Effects</span>}/>
        <Skillitem abbreviation={"fig"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Figma</span>}/>
      </Container>
    </div>
  );
}

export default Skills;
