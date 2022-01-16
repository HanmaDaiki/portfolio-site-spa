import React from 'react';
import classes from './About.module.css';
import Container from '../../UI/Container/Container';

const About = ({firstname, profession, town}) => {
  return (
    <div className={classes.About}>
      <Container>
        <h1>About Me</h1>
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
