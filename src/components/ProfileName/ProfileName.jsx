import React from 'react';
import classes from './ProfileName.module.css';

const Profilename = ({firstname, secondname}) => {
  return (
    <h1 className={classes.ProfileName}>
      {firstname}
      <br/>
      {secondname}
    </h1>
  );
};

export default Profilename;
