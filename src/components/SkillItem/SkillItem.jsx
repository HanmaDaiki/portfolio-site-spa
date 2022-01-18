import React from 'react';
import Skillitemicon from '../SkillItemIcon/SkillItemIcon';
import Skillraiting from '../SkillRaiting/SkillRaiting';
import classes from './SkillItem.module.css';

const Skillitem = ({name, abbreviation}) => {

  return (
    <div className={classes.SkillItem}>
      <Skillitemicon abbreviation={abbreviation}/>
      <br />
      {name}
      <Skillraiting />
    </div>
  );
}

export default Skillitem;
