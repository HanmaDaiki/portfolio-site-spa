import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container/Container';
import Project from '../Project/Project';
import Title from '../Title/Title';
import classes from './Projects.module.css';


const Projects = () => {
  const TitleProjects = styled.div`
    margin: 112px 0 47px 0;

    @media (max-width: 939){
      margin: 81px 0 64px 0;
    }
  `

  return (
    <div className={classes.Projects}>
      <Container>
        <Title>
          <TitleProjects>Portfolio</TitleProjects>  
        </Title>
        <Project nameProject={"levis"} desc={"Online fashion store - Homepage"}/>
        <Project nameProject={"reebok"} desc={"Reebok Store - Concept"}/>
        <Project nameProject={"braun"} desc={"Braun Landing Page - Concept"} />
      </Container>
    </div>
  );
};

export default Projects;
