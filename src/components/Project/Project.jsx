import './Project.css';

const Project = ({image, name}) => {
  return(
    <article className='project'>
      <img className='project__image' src={image} alt={`Картинка проекта -- ${name}`} />
      <h3 className='project__name'>{name}</h3>
    </article>
  );
};

export { Project };