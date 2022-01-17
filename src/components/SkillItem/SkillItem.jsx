import React from 'react';
import classes from './SkillItem.module.css';

const Skillitem = ({link}) => {
  return (
    <div className={classes.SkillItem}>
      <div style={{backgroundImage: 'url("../../assets/icons/ps.jpg")', width: '89px', height: '89px', display: 'flex'}}></div>
    </div>
  );
}

export default Skillitem;
