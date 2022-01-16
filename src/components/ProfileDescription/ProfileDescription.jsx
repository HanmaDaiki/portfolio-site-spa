import React from 'react';
import classes from './ProfileDescription.module.css';

const Profiledescription = ({profession, age, town}) => {
  return (
    <div className={classes.ProfileDescription}>
      {profession}
      <br/>
      {age} years old, {town}  
    </div>
  );
}

export default Profiledescription;
