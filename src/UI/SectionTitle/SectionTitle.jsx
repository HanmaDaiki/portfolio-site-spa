import './SectionTitle.css';

const SectionTitle = ({children}) => {
  return(
    <h2 className='section-title'>{children}</h2>
  );
};

export { SectionTitle };