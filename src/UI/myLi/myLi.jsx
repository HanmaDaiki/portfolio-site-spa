import React from 'react';
import classes from './myLi.module.css';

const Myli = ({children, ...props}) => {
  return (
    <li {...props} className={classes.myLi}>{children}</li>
  );
}

export default Myli;
