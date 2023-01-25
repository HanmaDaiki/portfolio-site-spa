import inIcon from '../../assets/icons/in.svg';
import instIcon from '../../assets/icons/inst.svg';
import beIcon from '../../assets/icons/be.svg';
import driIcon from '../../assets/icons/dri.svg';

import './Footer.css';

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer__social'>
        <a className='footer__link' href='/'>
          <img className='footer__icon' alt='Иконка' src={inIcon}/>
        </a>
        <a className='footer__link' href='/'>
          <img className='footer__icon' alt='Иконка' src={instIcon}/>
        </a>
        <a className='footer__link' href='/'>
          <img className='footer__icon' alt='Иконка' src={beIcon}/>
        </a>
        <a className='footer__link' href='/'>
          <img className='footer__icon' alt='Иконка' src={driIcon}/>
        </a>
      </div>
      <h3 className='footer__title'>
      Like me on<br />
      LinkedIn, Instagram, Behance, Dribble
      </h3>
    </footer>
  );
};

export { Footer }