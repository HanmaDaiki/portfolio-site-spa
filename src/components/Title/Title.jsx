import React from 'react';
import classes from './Title.module.css';

const Title = ({children}) => {
  return (
    <h1 className={classes.Title}>
      {children}
    </h1>
  );
}

export default Title;
