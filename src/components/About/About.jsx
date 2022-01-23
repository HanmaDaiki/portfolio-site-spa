import React from 'react';
import styled from 'styled-components';
import classes from './About.module.css';
import Container from '../../UI/Container/Container';
import Title from '../Title/Title';

const About = ({firstname, profession, town}) => {
  const TitleAbout = styled.div`
    margin-top: 120px;
    margin-bottom: 17px;

    @media (max-width: 375px) {
      margin-top: 81px;
      margin-bottom: 29px;
    }
  `;

  return (
    <div className={classes.About}>
      <Container>
        <Title>
          <TitleAbout>About Me</TitleAbout>
        </Title>
        <span>
          Hi, I'm {firstname} – {profession} from {town}.
          I'm interested in design and everything connected with it.
        </span>
        <span>
          I'm studying at courses "Web and mobile design 
          interfaces" in IT-Academy.
        </span>
        <span>
          Ready to implement excellent projects
          with wonderful people.
        </span>
      </Container>
    </div>
  );
}

export default About;
