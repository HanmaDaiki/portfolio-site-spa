import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container/Container';
import Skillitem from '../SkillItem/SkillItem';
import Title from '../Title/Title';
import classes from './Skills.module.css'

/**
*  FIXME: Убрать стили из элемента в css
*/

const Skills = () => {

  const TitleSkills = styled.div`
    margin: 91px 0 69px 0;

    @media (max-width: 375px){
      margin: 83px 0 50px 0;
    }
  `;

  const DescriptionSkills = styled.div`
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin: 0 0 83px 0;

    @media (max-width: 375px){
      margin: 0 0 70px 0;
    }
  `;
  return (
    <div className={classes.Skills}>
      <Container>
        <Title>
          <TitleSkills>Skills</TitleSkills>
        </Title>
        <DescriptionSkills>
            I work in such programs as
        </DescriptionSkills>
        <Skillitem rating={3} abbreviation={"ps"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>Photoshop</span>}/>
        <Skillitem rating={3} abbreviation={"ai"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>Illustrator</span>}/>
        <Skillitem rating={4} abbreviation={"ae"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Adobe<br/>After Effects</span>}/>
        <Skillitem rating={4} abbreviation={"fig"} name={<span style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', fontSize: '14px', lineHeight: '17px', color: '#828282'}}>Figma</span>}/>
      </Container>
    </div>
  );
}

export default Skills;
