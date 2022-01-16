import React from 'react';
import classes from './myUl.module.css'

const Myul = ({children, ...props}) => {
  return (
    <ul {...props} className={classes.myUl}>{children}</ul>
    
  );
}

export default Myul;
