import React from 'react';
import classes from './SkillRaiting.module.css';

/**
 * 
 * FIXME: ПЕРЕДЕЛАТЬ ВСЁ!!! Не устраивает setRaiting
 */

const setRating = (rating) => {
  let Rating = <div className={classes.SkillRaiting}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>;

  let active= {
    color: 'black'
  };

  switch(rating){
    case 1:
      return Rating = <div className={classes.SkillRaiting}><span style={active}>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>;
    case 2:
      return Rating = <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span>★</span><span>★</span><span>★</span></div>;
    case 3:
      return Rating = <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span>★</span><span>★</span></div>;
    case 4:
      return Rating = <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span>★</span></div>;
    case 5:
      return Rating = <div className={classes.SkillRaiting}><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span><span style={active}>★</span></div>;
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
