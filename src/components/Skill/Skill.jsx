import ReactStarRating from "react-star-ratings-component";

import './Skill.css';

const Skill = ({rating, image, name}) => {
  return(
    <article className='skill'>
      <img className='skill__image' src={image} alt={`Картинка от навыка ${name}`}/>
      <h3 className='skill__name'>{name}</h3>
      <ReactStarRating 
        numberOfStar={5}
        numberOfSelectedStar={rating}
        starSize='26px'
        spaceBetweenStar='9px'
        disableOnSelect={true}
        colorFilledStar='#070707'
        colorEmptyStar='#e5e5e5'
      />
    </article>
  );
};

export { Skill };