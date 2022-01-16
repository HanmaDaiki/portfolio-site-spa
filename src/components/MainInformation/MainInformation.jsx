import React from 'react';
import Profilename from '../ProfileName/ProfileName';
import Profiledescription from '../ProfileDescription/ProfileDescription';
import classes from './MainInformation.module.css';
import Profilephoto from '../ProfilePhoto/ProfilePhoto';
import Container from '../../UI/Container/Container';

const Maininformation = ({firstname, secondname, profession, age, town}) => {
  return (
    <div className={classes.MainInformation}>
      <Container>
        <Profilename firstname={firstname} secondname={secondname} />
        <Profiledescription profession={profession} age={age} town={town} />
        <Profilephoto />
      </Container>
    </div>
  );
};

export default Maininformation;
