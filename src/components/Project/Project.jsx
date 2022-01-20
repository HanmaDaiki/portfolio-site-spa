import React from 'react';
import braun from '../../assets/images/braun.jpg';
import levis from '../../assets/images/levis.jpg';
import reebok from '../../assets/images/reebok.jpg';

function setPick(NameProject) {
  if(NameProject === "braun"){
    return <img src={braun} alt="" style={{width: 'auto', height: '510px', display: 'block', margin: '0 auto'}}/>;
  }
  if(NameProject === "levis"){
    return <img src={levis} alt="" style={{width: 'auto', height: '522px', display: 'block', margin: '0 auto'}}/>;
  }
  if(NameProject === "reebok"){
    return <img src={reebok} alt="" style={{width: 'auto', height: '522px', display: 'block', margin: '0 auto'}}/>;
  }
};

const Project = ({nameProject, desc}) => {
  let pick = setPick(nameProject);

  return (
    <div style={{marginBottom: "99px"}}>
      <div style={{marginBottom: '44px'}}>{pick}</div>
      <br />
      <div style={{fontSize: '18px', lineHeight: '22px', textAlign: 'center', textDecorationLine: 'underline'}}>{desc}</div>
    </div>
  );
}

export default Project;
