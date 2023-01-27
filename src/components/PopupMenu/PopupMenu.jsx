import { Navigation } from '../../UI/Navigation/Navigation';

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
          </div>
          :
          <></>
      }
    </>
  );
};

export { PopupMenu };