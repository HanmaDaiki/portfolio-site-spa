import React from 'react';
import classes from './About.module.css';
import Container from '../../UI/Container/Container';
import Title from '../Title/Title';

const About = ({firstname, profession, town}) => {
  return (
    <div className={classes.About}>
      <Container>
        <Title>
          <span style={{marginBottom: '17px', marginTop: '120px'}}>About Me</span>
        </Title>
        <span>
          Hi, I'm {firstname} – {profession} from {town}.
          <br/>
          I'm interested in design and everything connected with it.
        </span>
        <span>
          I'm studying at courses "Web and mobile design 
          <br />
          interfaces" in IT-Academy.
        </span>
        <span>
          Ready to implement excellent projects
          <br />
          with wonderful people.
        </span>
      </Container>
    </div>
  );
}

export default About;
