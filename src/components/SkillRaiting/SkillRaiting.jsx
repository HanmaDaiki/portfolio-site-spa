import React from 'react';
import classes from './SkillRaiting.module.css';
import './Star.css';

/**
 * 
 * TODO: Придумать систему для отслеживания рейтинга скилла. 
 */

const Skillraiting = () => {
  return(
    <div className={classes.SkillRaiting}>
      <span className='Star-one'></span>
      <span className='Star-two'></span>
      <span className='Star-three'></span>
      <span className='Star-four'></span>
      <span className='Star-five'></span>
    </div>
  );
};

export default Skillraiting;
