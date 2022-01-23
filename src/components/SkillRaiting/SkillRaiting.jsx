import React from 'react';
import classes from './SkillRaiting.module.css';

/**
 * 
 * FIXME: ПЕРЕДЕЛАТЬ ВСЁ!!! Не устраивает setRaiting
 */

const setRating = (rating) => {

  let active= {
    color: 'black'
  };

  switch(rating){
    case 1:
      return <div className={classes.SkillRaiting}><span style={active}>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>;
    case 2:
      return <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span>★</span><span>★</span><span>★</span></div>;
    case 3:
      return <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span>★</span><span>★</span></div>;
    case 4:
      return <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span>★</span></div>;
    case 5:
      return <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span></div>;
    default:
      return console('Not in RANGE 1 - 5')
  };
};

const Skillraiting = ({rating}) => {
  return(
    <div>
      {setRating(rating)}
    </div>
  );
};

export default Skillraiting;
