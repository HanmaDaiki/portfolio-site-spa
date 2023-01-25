import Container from '../../UI/Container/Container';

import './Maininformation.css'

const Maininformation = () => {
  return (
    <Container>
      <section id='home' className='main-information'>
          <div className='main-information__text-block'>
            <h1 className='main-information__title'>Denis Novik</h1>
            <p className='main-information__description'>UX | UI designer 24 years old, Minsk</p>
            <div className='main-information__language'>
              <button className='main-information__button'>RU</button>
              |
              <button className='main-information__button'>ENG</button>
            </div>
          </div>
          <div className='main-information__photo' />
      </section>
    </Container>
  );
};

export default Maininformation;
