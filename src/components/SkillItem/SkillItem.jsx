import React from 'react';
import Skillitemicon from '../SkillItemIcon/SkillItemIcon';
import Skillraiting from '../SkillRaiting/SkillRaiting';
import classes from './SkillItem.module.css';

const Skillitem = ({name, abbreviation, rating}) => {

  return (
    <div className={classes.SkillItem}>
      <Skillitemicon abbreviation={abbreviation}/>
      <br />
      <div style={{height: "27px"}}>{name}</div>
      <Skillraiting rating={rating}/>
    </div>
  );
}

export default Skillitem;
