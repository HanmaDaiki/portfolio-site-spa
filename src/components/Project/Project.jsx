import React from 'react';
import classes from './Project.module.css'
import braun from '../../assets/images/braun.jpg';
import levis from '../../assets/images/levis.jpg';
import reebok from '../../assets/images/reebok.jpg';

function setPick(NameProject) {
  if(NameProject === "braun"){
    return <img src={braun} alt=""/>;
  }
  if(NameProject === "levis"){
    return <img src={levis} alt=""/>;
  }
  if(NameProject === "reebok"){
    return <img src={reebok} alt=""/>;
  }
};

const Project = ({nameProject, desc}) => {
  let pick = setPick(nameProject);

  return (
    <div className={classes.Project}>
      <div>{pick}</div>
      <br />
      <div style={{fontSize: '18px', lineHeight: '22px', textAlign: 'center', textDecorationLine: 'underline'}}>{desc}</div>
    </div>
  );
}

export default Project;
