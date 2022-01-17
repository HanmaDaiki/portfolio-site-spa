import React from 'react';
import Skillitemicon from '../SkillItemIcon/SkillItemIcon';
import classes from './SkillItem.module.css';

const Skillitem = ({name, abbreviation}) => {

  return (
    <div className={classes.SkillItem}>
      <Skillitemicon abbreviation={abbreviation}/>
      <br />
      {name}
    </div>
  );
}

export default Skillitem;
