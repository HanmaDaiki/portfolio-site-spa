import React from 'react';
import Container from '../../UI/Container/Container';
import Project from '../Project/Project';
import Title from '../Title/Title';
import classes from './Projects.module.css';


const Projects = () => {
  return (
    <div className={classes.Projects}>
      <Container>
        <Title>
          <span style={{margin: "112px 0 47px 0"}}>Portfolio</span>  
        </Title>
        <Project nameProject={"levis"} desc={"Online fashion store - Homepage"}/>
        <Project nameProject={"reebok"} desc={"Reebok Store - Concept"}/>
        <Project nameProject={"braun"} desc={"Braun Landing Page - Concept"} />
      </Container>
    </div>
  );
};

export default Projects;
