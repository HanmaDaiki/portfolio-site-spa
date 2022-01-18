import React from 'react';
import ps from '../../assets/icons/ps.jpg';
import ae from '../../assets/icons/ae.jpg';
import ai from '../../assets/icons/ai.jpg';
import fig from '../../assets/icons/fig.jpg';
/**
* FIXME: Убрать стили в css и подгружать линк через пропсы
*/
const Skillitemicon = (props) => {
  let img = <img src="" alt="" />
  if(props.abbreviation === "ps"){
    img = <img src={ps} alt="" style={{width: '89px', height: '88px', display: 'block', margin: '0 auto'}}/>;
  }
  if(props.abbreviation === "ae"){
    img = <img src={ae} alt="" style={{width: '89px', height: '88px', display: 'block', margin: '0 auto'}}/>;
  }
  if(props.abbreviation === "ai"){
    img = <img src={ai} alt="" style={{width: '89px', height: '88px', display: 'block', margin: '0 auto'}}/>;
  }
  if(props.abbreviation === "fig"){
    img = <img src={fig} alt="" style={{width: '58px', height: '88px', display: 'block', margin: '0 auto'}}/>;
  }
  return (img);
}

export default Skillitemicon;
