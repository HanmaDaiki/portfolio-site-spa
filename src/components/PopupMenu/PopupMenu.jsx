import { Navigation } from '../../UI/Navigation/Navigation';
import { Translater } from '../../UI/Translater/Translater';

import './PopupMenu.css'

const PopupMenu = ({ isActive, onCloseMenu }) => {
  return (
    <>
      {
        isActive
          ?
          <div className='popup-menu'>
            <button className='popup-menu__button-close' onClick={onCloseMenu}>
            </button>
            <Navigation />
            <Translater />
          </div>
          :
          <></>
      }
    </>
  );
};

export { PopupMenu };