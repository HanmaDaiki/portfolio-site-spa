import React from 'react';
import classes from './Title.module.css';

const Title = ({children}) => {
  return (
    <div className={classes.Title}>
      {children}
    </div>
  );
}

export default Title;
